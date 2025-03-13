<script setup lang="ts">
import IconField from "primevue/iconfield";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { useWorkflowStore } from "@/stores/workflows";
import { useSDK } from "@/plugins/sdk";
import { ref, computed, onMounted } from "vue";
import InputIcon from "primevue/inputicon";

const sdk = useSDK();
const store = useWorkflowStore();

const isInstalling = ref(false);
const isPluginOutdated = ref(false);

const notInstalledWorkflows = computed(() => {
  return store.filteredWorkflows.filter(
    (workflow) => !store.installedWorkflowsNames.includes(workflow.name)
  );
});

const handleInstallAll = async () => {
  isInstalling.value = true;
  try {
    const installedCount = await store.installAllWorkflows();
    sdk.window.showToast(
      `All ${installedCount} workflows installed successfully`,
      { variant: "success" }
    );
  } finally {
    isInstalling.value = false;
  }
};

onMounted(() => {
  sdk.backend.isOutdated().then((isOutdated) => {
    isPluginOutdated.value = isOutdated;
  });
});
</script>

<template>
  <div class="flex justify-between items-center p-6 gap-4">
    <div class="flex-1">
      <h3 class="text-lg font-semibold">Workflows Store</h3>
      <p class="text-sm text-surface-300 flex-1">
        Browse and install various workflows from our collection of pre-built workflows with a single click
      </p>
    </div>
    <div
      v-if="isPluginOutdated"
      class="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-md flex items-center"
    >
      <i class="fas fa-exclamation-triangle mr-2"></i>
      <span>Workflows Store is outdated. Please update the plugin.</span>
    </div>
    <IconField>
      <InputIcon class="fas fa-magnifying-glass" />
      <InputText v-model="store.searchQuery" placeholder="Search" />
    </IconField>
    <Button
      :label="`Install all (${notInstalledWorkflows.length})`"
      icon="fas fa-download"
      @click="handleInstallAll"
      :loading="isInstalling"
      :disabled="notInstalledWorkflows.length === 0"
      :class="{
        'p-button-secondary': notInstalledWorkflows.length === 0,
      }"
    ></Button>
  </div>
</template>
