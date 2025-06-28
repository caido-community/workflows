import type { DefineAPI, SDK } from "caido:plugin";
import { ok, type Result, type Workflow } from "shared";

import { WorkflowStore } from "./store/workflows";

const createListWorkflows =
  (workflowStore: WorkflowStore) => (): Result<Workflow[]> => {
    return ok(workflowStore.getWorkflows());
  };

const createWorkflowDefinition =
  (workflowStore: WorkflowStore) =>
  (_: SDK, workflowID: string): Result<unknown> => {
    return ok(workflowStore.getWorkflowDefinition(workflowID));
  };

export const isOutdated = async (sdk: SDK): Promise<Result<boolean>> => {
  const updateAvailable = await sdk.meta.updateAvailable();
  return ok(updateAvailable);
};

export type API = DefineAPI<{
  listWorkflows: ReturnType<typeof createListWorkflows>;
  workflowDefinition: ReturnType<typeof createWorkflowDefinition>;
  isOutdated: typeof isOutdated;
}>;

export function init(sdk: SDK<API>) {
  const workflowStore = new WorkflowStore(sdk);
  workflowStore.loadWorkflows();

  sdk.api.register("listWorkflows", createListWorkflows(workflowStore));
  sdk.api.register(
    "workflowDefinition",
    createWorkflowDefinition(workflowStore),
  );
  sdk.api.register("isOutdated", isOutdated);
}
