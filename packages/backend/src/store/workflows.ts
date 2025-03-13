import { Workflow } from "shared";
import * as fs from "fs";
import { SDK } from "caido:plugin";
import path from "path";

export class WorkflowStore {
  private static _instance?: WorkflowStore;
  private workflows: Workflow[];
  private sdk?: SDK;

  private constructor() {
    this.workflows = [];
  }

  static getInstance(): WorkflowStore {
    if (!WorkflowStore._instance) {
      WorkflowStore._instance = new WorkflowStore();
    }
    return WorkflowStore._instance;
  }

  setSdk(sdk: SDK): void {
    this.sdk = sdk;
  }

  loadWorkflows(): void {
    if (!this.sdk) {
      throw new Error("SDK not initialized");
    }

    this.workflows = [];
    const sdk = this.sdk;
    const assetsPath = sdk.meta.assetsPath();
    sdk.console.log(`Loading workflows from assets path: ${assetsPath}`);

    try {
      const dirs = fs.readdirSync(assetsPath);

      for (const dir of dirs) {
        const definitionPath = path.join(assetsPath, dir, "definition.json");
        const manifestPath = path.join(assetsPath, dir, "manifest.json");

        try {
          const fileStats = fs.statSync(definitionPath);
          const manifestStats = fs.statSync(manifestPath);

          if (fileStats.isFile() && manifestStats.isFile()) {
            const definitionContent = fs.readFileSync(definitionPath, "utf-8");
            const manifestContent = fs.readFileSync(manifestPath, "utf-8");

            const definition = JSON.parse(definitionContent);
            const manifest = JSON.parse(manifestContent);

            const workflow: Workflow = {
              id: manifest.id || dir,
              name: manifest.name || definition.name || dir,
              description: manifest.description || definition.description || "",
              version: manifest.version || definition.version || "1.0.0",
              kind: definition.kind || "unknown",
              author: manifest.author ||
                definition.author || {
                  name: "unknown",
                  email: "unknown",
                },
              url: manifest.url || definition.url || "",
            };

            this.workflows.push(workflow);
            sdk.console.log(`Added workflow: ${workflow.name}`);
          }
        } catch (error) {
          sdk.console.error(`Error reading workflow files from ${dir}`);
          sdk.console.log(
            `Error details: ${
              error instanceof Error ? error.message : String(error)
            }`
          );
        }
      }
    } catch (error) {
      sdk.console.error(
        `Error reading directories from assets path: ${assetsPath}`
      );
      sdk.console.log(
        `Error details: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }

    sdk.console.log(`Loaded ${this.workflows.length} workflows`);
  }

  getWorkflows(): Workflow[] {
    return [...this.workflows];
  }

  exists(workflowId: string): boolean {
    return this.workflows.some((workflow) => workflow.id === workflowId);
  }

  getWorkflowDefinition(workflowId: string): any | null {
    if (!this.sdk) {
      throw new Error("SDK not initialized");
    }

    if (!this.exists(workflowId)) {
      throw new Error("Workflow not found");
    }

    const sdk = this.sdk;
    const assetsPath = sdk.meta.assetsPath();
    const workflowPath = path.join(assetsPath, workflowId, "definition.json");

    try {
      try {
        const fileContent = fs.readFileSync(workflowPath);
        return JSON.parse(fileContent.toString());
      } catch (statError) {
        sdk.console.error(`Workflow package not found: ${workflowPath}`);
        return null;
      }
    } catch (error) {
      sdk.console.error(`Error loading workflow package: ${workflowPath}`);
      sdk.console.log(
        `Error details: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
      return null;
    }
  }
}
