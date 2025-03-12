<script setup lang="ts">
import Card from "primevue/card";
import WorkflowHeader from "@/components/workflows/header/WorkflowHeader.vue";
import WorkflowList from "@/components/workflows/list/WorkflowList.vue";
import { useWorkflowStore } from "@/stores/workflows";
import { onMounted, onUnmounted } from "vue";
import { useSDK } from "@/plugins/sdk";

const store = useWorkflowStore();
const sdk = useSDK();

onMounted(() => {
  let stopped = false;

  (async () => {
    for await (const _ of sdk.graphql.deletedWorkflow()) {
      if (stopped) break;
      store.refetchInstalledWorkflows();
    }
  })();

  onUnmounted(() => {
    stopped = true;
  });
});
</script>

<template>
  <div class="h-full">
    <Card
      class="h-full"
      :pt="{
        body: {
          className: 'p-0 h-full',
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
