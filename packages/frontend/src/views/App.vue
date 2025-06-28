<script setup lang="ts">
import Card from "primevue/card";
import { onMounted, onUnmounted } from "vue";

import WorkflowHeader from "@/components/workflows/header/WorkflowHeader.vue";
import WorkflowList from "@/components/workflows/list/WorkflowList.vue";
import { useSDK } from "@/plugins/sdk";
import { useWorkflowStore } from "@/stores/workflows";

const store = useWorkflowStore();
const sdk = useSDK();

onMounted(() => {
  store.initialize();

  const deletedWorkflows = sdk.workflows.onDeletedWorkflow(() => {
    store.refetchInstalledWorkflows();
  });

  const createdWorkflows = sdk.workflows.onCreatedWorkflow(() => {
    store.refetchInstalledWorkflows();
  });

  onUnmounted(() => {
    deletedWorkflows.stop();
    createdWorkflows.stop();
  });
});
</script>

<template>
  <div class="h-full overflow-auto">
    <Card
      class="h-full"
      :pt="{
        body: {
          className: 'p-0 h-full overflow-auto',
        },
      }"
    >
      <template #header>
        <WorkflowHeader />
      </template>
      <template #content>
        <WorkflowList :workflows="store.filteredWorkflows" />
      </template>
    </Card>
  </div>
</template>
