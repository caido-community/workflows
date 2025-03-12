import type { DefineAPI, SDK } from "caido:plugin";
import { Workflow } from "shared";
import { WorkflowStore } from "./store/workflows";

const listWorkflows = (sdk: SDK): Workflow[] => {
  const workflowStore = WorkflowStore.getInstance();
  return workflowStore.getWorkflows();
}

export const workflowDefinition = (sdk: SDK, workflowID: string): any | null => {
  const workflowStore = WorkflowStore.getInstance();
  return workflowStore.getWorkflowDefinition(workflowID);
}

export const isOutdated = async (sdk: SDK): Promise<boolean> => {
  const updateAvailable = await sdk.meta.updateAvailable();
  return updateAvailable;
}

export type API = DefineAPI<{
  listWorkflows: typeof listWorkflows;
  workflowDefinition: typeof workflowDefinition;
  isOutdated: typeof isOutdated;
}>;

export function init(sdk: SDK<API>) {
  const workflowStore = WorkflowStore.getInstance();
  workflowStore.setSdk(sdk);
  workflowStore.loadWorkflows();

  sdk.api.register("listWorkflows", listWorkflows);
  sdk.api.register("workflowDefinition", workflowDefinition);
  sdk.api.register("isOutdated", isOutdated);
}
