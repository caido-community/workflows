import { useWorkflow } from "@/composables/useWorkflow";
import { useSDK } from "@/plugins/sdk";
import { defineStore } from "pinia";
import type { Workflow } from "shared";
import { computed, ref } from "vue";

export interface WorkflowState {
  workflows: Workflow[];
  installedWorkflowsNames: string[];
  searchQuery: string;
}

export const useWorkflowStore = defineStore("workflows", () => {
  const sdk = useSDK();
  const { installedWorkflows } = useWorkflow();

  // State
  const state = ref<WorkflowState>({
    workflows: [],
    installedWorkflowsNames: [],
    searchQuery: "",
  });

  // Getters
  const filteredWorkflows = computed(() =>
    state.value.workflows.filter((workflow) =>
      workflow?.name.toLowerCase().includes(state.value.searchQuery.toLowerCase()) ||
      workflow?.id.toLowerCase().includes(state.value.searchQuery.toLowerCase())
    )
  );

  // Actions
  const loadWorkflows = async () => {
    state.value.workflows = (await sdk.backend.listWorkflows()) || [];
  };

  const setSearchQuery = (query: string) => {
    state.value.searchQuery = query;
  };

  const refetchInstalledWorkflows = async () => {
    state.value.installedWorkflowsNames = await installedWorkflows();
  };

  const isWorkflowInstalled = (workflowName: string): boolean => {
    return state.value.installedWorkflowsNames.includes(workflowName);
  };

  // Initialize
  loadWorkflows();
  refetchInstalledWorkflows();

  return {
    // State
    workflows: computed(() => state.value.workflows),
    installedWorkflowsNames: computed(() => state.value.installedWorkflowsNames),
    searchQuery: computed({
      get: () => state.value.searchQuery,
      set: setSearchQuery,
    }),

    // Getters
    filteredWorkflows,

    // Actions
    setSearchQuery,
    refetchInstalledWorkflows,
    isWorkflowInstalled,
  };
});
