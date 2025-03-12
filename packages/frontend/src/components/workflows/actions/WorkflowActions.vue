<script setup lang="ts">
import Button from "primevue/button";
import type { Workflow } from 'shared';
import { useWorkflowStore } from "@/stores/workflows";
import { useWorkflow } from "@/composables/useWorkflow";
import { useSDK } from "@/plugins/sdk";

interface Props {
  workflow: Workflow;
}

const props = defineProps<Props>();
const store = useWorkflowStore();
const sdk = useSDK();
const { installWorkflow } = useWorkflow();

const handleInstall = async () => {
  const result = await installWorkflow(props.workflow.id);
  if (result.error) {
    sdk.window.showToast(result.message, {
      variant: "error",
    });
  } else {
    sdk.window.showToast("Workflow installed successfully", {
      variant: "success",
    });
    await store.refetchInstalledWorkflows();
  }
};
</script>

<template>
  <Button
    label="Install"
    @click="handleInstall"
    size="small"
    :disabled="store.isWorkflowInstalled(props.workflow.name)"
    :class="{ 'p-button-outlined': store.isWorkflowInstalled(props.workflow.name) }"
  />
</template>
