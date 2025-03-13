<script setup lang="ts">
import Button from "primevue/button";
import type { Workflow } from 'shared';
import { useWorkflowStore } from "@/stores/workflows";
import { useSDK } from "@/plugins/sdk";
import { computed } from "vue";

const props = defineProps<{
  workflow: Workflow;
}>();

const store = useWorkflowStore();
const sdk = useSDK();

const handleInstall = async () => {
  const result = await store.installWorkflow(props.workflow.id);
  if (result.error) {
    sdk.window.showToast(result.message, {
      variant: "error",
    });
  } else {
    sdk.window.showToast("Workflow installed successfully", {
      variant: "success",
    });
  }
};

const isInstalled = computed(() => {
  return store.isWorkflowInstalled(props.workflow.name)
});
</script>

<template>
  <Button
    label="Install"
    @click="handleInstall"
    size="small"
    :disabled="isInstalled"
    :class="{ 'p-button-outlined': isInstalled }"
  />
</template>
