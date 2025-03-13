<script setup lang="ts">
import type { Workflow } from 'shared';

defineProps<{
  workflow: Workflow;
}>();
</script>

<template>
  <div class="p-4 select-text">
    <h3 class="text-lg font-semibold mb-2">{{ workflow.name }}</h3>
    <p class="mb-2"><strong>Description:</strong> {{ workflow.description }}</p>
    <p class="mb-2"><strong>Version:</strong> {{ workflow.version }}</p>
    <p class="mb-2"><strong>Kind:</strong> {{ workflow.kind }}</p>
    <p class="mb-2">
      <strong>Author:</strong> {{ workflow.author.name }}
      <span v-if="workflow.author.email" class="text-gray-500 text-sm">
        ({{ workflow.author.email }})
      </span>
    </p>
    <a v-if="workflow.url" :href="workflow.url" target="_blank" class="text-blue-500 hover:underline">
      Source Code
    </a>
  </div>
</template>
