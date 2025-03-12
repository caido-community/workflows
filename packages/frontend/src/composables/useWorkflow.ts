import { useSDK } from "@/plugins/sdk";
import { useWorkflowStore } from "@/stores/workflows";

interface WorkflowResult {
  error: boolean;
  kind: "success" | "error";
  message: string;
}

export function useWorkflow() {
  const sdk = useSDK();
  const store = useWorkflowStore();

  const installWorkflow = async (workflowID: string): Promise<WorkflowResult> => {
    try {
      const definition = await sdk.backend.workflowDefinition(workflowID);
      const { createWorkflow } = await sdk.graphql.createWorkflow({
        input: { definition, global: false },
      });

      if (createWorkflow.workflow) {
        return {
          error: false,
          kind: "success",
          message: "Workflow installed successfully"
        };
      }

      return {
        error: true,
        kind: "error",
        message: createWorkflow.error ? JSON.stringify(createWorkflow.error) : "Unknown error occurred",
      };
    } catch (error) {
      console.error("Error installing workflow:", error);
      return {
        error: true,
        kind: "error",
        message: "Failed to install workflow"
      };
    }
  };

  const installAllWorkflows = async (): Promise<void> => {
    const workflows = store.filteredWorkflows;
    for (const workflow of workflows) {
      if (!store.installedWorkflowsNames.includes(workflow.name)) {
        await installWorkflow(workflow.id);
      }
    }
  };

  const installedWorkflows = async (): Promise<string[]> => {
    //const workflows = sdk.workflows.getWorkflows()
    //return workflows.map((workflow) => workflow.name);

    const workflows = await sdk.graphql.workflowsState();
    return workflows.workflows.map((workflow) => workflow.name);
  };

  return {
    installWorkflow,
    installedWorkflows,
    installAllWorkflows,
  };
}
