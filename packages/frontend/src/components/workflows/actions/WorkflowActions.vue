<script setup lang="ts">
import Button from "primevue/button";
import type { Workflow } from "shared";
import { computed } from "vue";

import { useSDK } from "@/plugins/sdk";
import { useWorkflowStore } from "@/stores/workflows";

const props = defineProps<{
  workflow: Workflow;
}>();

const store = useWorkflowStore();
const sdk = useSDK();

const handleInstall = async () => {
  const result = await store.installWorkflow(props.workflow.id);
  if (result.error !== undefined) {
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
  return store.isWorkflowInstalled(props.workflow.name);
});
</script>

<template>
  <Button
    label="Install"
    size="small"
    :disabled="isInstalled"
    :class="{ 'p-button-outlined': isInstalled }"
    @click="handleInstall"
  />
</template>
