import { defineStore } from "pinia";
import type { Workflow } from "shared";
import { computed, ref } from "vue";

import { useSDK } from "@/plugins/sdk";

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
        workflow?.id.toLowerCase().includes(searchQuery.value.toLowerCase()),
    ),
  );

  // Actions
  const loadWorkflows = async () => {
    const workflowsResult = await sdk.backend.listWorkflows();
    switch (workflowsResult.kind) {
      case "Success":
        workflows.value = workflowsResult.value;
        break;
      case "Error":
        console.error("Error loading workflows:", workflowsResult.error);
        sdk.window.showToast("Error loading workflows", {
          variant: "error",
        });
    }
  };

  const setSearchQuery = (query: string) => {
    searchQuery.value = query;
  };

  const refetchInstalledWorkflows = () => {
    installedWorkflowsNames.value = installedWorkflows();
  };

  const isWorkflowInstalled = (workflowName: string): boolean => {
    return installedWorkflowsNames.value.includes(workflowName);
  };

  const installWorkflow = async (
    workflowID: string,
  ): Promise<WorkflowResult> => {
    try {
      const result = await sdk.backend.workflowDefinition(workflowID);

      if (result.kind === "Success") {
        const definition = result.value as Record<string, unknown>;
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
            : "Unknown error",
        };
      }

      return {
        error: true,
        kind: "error",
        message: result.error ? JSON.stringify(result.error) : "Unknown error",
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

  const installedWorkflows = (): string[] => {
    const workflowsList = sdk.workflows.getWorkflows();
    return workflowsList.map((workflow) => workflow.name);
  };

  const initialize = async () => {
    await loadWorkflows();
    refetchInstalledWorkflows();
  };

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
    initialize,
  };
});
