import { useSDK } from "@/plugins/sdk";
import { defineStore } from "pinia";
import type { Workflow } from "shared";
import { computed, ref } from "vue";

export interface WorkflowState {
  workflows: Workflow[];
  installedWorkflowsNames: string[];
  searchQuery: string;
}

interface WorkflowResult {
  error: boolean;
  kind: "success" | "error";
  message: string;
}

export const useWorkflowStore = defineStore("workflows", () => {
  const sdk = useSDK();

  // State
  const workflows = ref<Workflow[]>([]);
  const installedWorkflowsNames = ref<string[]>([]);
  const searchQuery = ref<string>("");

  // Getters
  const filteredWorkflows = computed(() =>
    workflows.value.filter(
      (workflow) =>
        workflow?.name
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase()) ||
        workflow?.id
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase())
    )
  );

  // Actions
  const loadWorkflows = async () => {
    workflows.value = (await sdk.backend.listWorkflows()) || [];
  };

  const setSearchQuery = (query: string) => {
    searchQuery.value = query;
  };

  const refetchInstalledWorkflows = async () => {
    installedWorkflowsNames.value = await installedWorkflows();
  };

  const isWorkflowInstalled = (workflowName: string): boolean => {
    return installedWorkflowsNames.value.includes(workflowName);
  };

  const installWorkflow = async (
    workflowID: string
  ): Promise<WorkflowResult> => {
    try {
      const definition = await sdk.backend.workflowDefinition(workflowID);
      const { createWorkflow } = await sdk.graphql.createWorkflow({
        input: { definition, global: false },
      });

      if (createWorkflow.workflow) {
        return {
          error: false,
          kind: "success",
          message: "Workflow installed successfully",
        };
      }

      return {
        error: true,
        kind: "error",
        message: createWorkflow.error
          ? JSON.stringify(createWorkflow.error)
          : "Unknown error occurred",
      };
    } catch (error) {
      console.error("Error installing workflow:", error);
      return {
        error: true,
        kind: "error",
        message: "Failed to install workflow",
      };
    }
  };

  const installAllWorkflows = async (): Promise<number> => {
    let installedCount = 0;
    const workflowsList = filteredWorkflows.value;
    for (const workflow of workflowsList) {
      if (!installedWorkflowsNames.value.includes(workflow.name)) {
        await installWorkflow(workflow.id);
        installedCount++;
      }
    }
    return installedCount;
  };

  const installedWorkflows = async (): Promise<string[]> => {
    const workflowsList = sdk.workflows.getWorkflows();
    return workflowsList.map((workflow) => workflow.name);
  };

  // Initialize
  loadWorkflows();
  refetchInstalledWorkflows();

  return {
    // State
    workflows: computed(() => workflows.value),
    installedWorkflowsNames: computed(() => installedWorkflowsNames.value),
    searchQuery: computed({
      get: () => searchQuery.value,
      set: setSearchQuery,
    }),

    // Getters
    filteredWorkflows,

    // Actions
    setSearchQuery,
    refetchInstalledWorkflows,
    isWorkflowInstalled,
    installWorkflow,
    installAllWorkflows,
  };
});
