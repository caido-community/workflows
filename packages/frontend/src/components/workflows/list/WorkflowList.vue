<script setup lang="ts">
import { ref } from "vue";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import type { Workflow } from 'shared';
import WorkflowActions from '@/components/workflows/actions/WorkflowActions.vue';
import WorkflowDetails from '@/components/workflows/list/WorkflowDetails.vue';

defineProps<{
  workflows: Workflow[];
}>();

const expandedRows = ref({});
</script>

<template>
  <DataTable
    :value="workflows"
    stripedRows
    v-model:expandedRows="expandedRows"
    dataKey="id"
    expandedRowIcon="fas fa-chevron-down"
    collapsedRowIcon="fas fa-chevron-right"
    scrollable
    scrollHeight="calc(100vh - 170px)"
    class="h-full"
  >
    <Column :expander="true" style="width: 2%" />
    <Column field="name" header="Name" style="width: 20%" />
    <Column field="description" header="Description" style="width: 40%" />
    <Column field="version" header="Version" style="width: 10%" />
    <Column header="Author" style="width: 15%">
      <template #body="slotProps">
        {{ slotProps.data.author.name }}
        <span class="text-gray-500 text-sm" v-if="slotProps.data.author.email">
          ({{ slotProps.data.author.email }})
        </span>
      </template>
    </Column>
    <Column field="kind" header="Kind" style="width: 10%" />
    <Column header="Actions" style="width: 10%">
      <template #body="slotProps">
        <WorkflowActions :workflow="slotProps.data" />
      </template>
    </Column>
    <template #expansion="slotProps">
      <WorkflowDetails :workflow="slotProps.data" />
    </template>
  </DataTable>
</template>
