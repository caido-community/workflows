import * as fs from "fs";
import path from "path";

import { type SDK } from "caido:plugin";
import { type Workflow } from "shared";

type DefinitionData = {
  name?: string;
  description?: string;
  version?: string;
  kind?: string;
};

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function getString(
  obj: Record<string, unknown>,
  key: string,
): string | undefined {
  const value = obj[key];
  return typeof value === "string" ? value : undefined;
}

function parseDefinition(content: string): DefinitionData {
  try {
    const parsed = JSON.parse(content) as unknown;
    if (!isObject(parsed)) return {};

    return {
      name: getString(parsed, "name"),
      description: getString(parsed, "description"),
      version: getString(parsed, "version"),
      kind: getString(parsed, "kind")
    };
  } catch {
    return {};
  }
}

export class WorkflowStore {
  private workflows: Workflow[];
  private sdk: SDK;

  constructor(sdk: SDK) {
    this.workflows = [];
    this.sdk = sdk;
  }

  loadWorkflows(): void {
    this.workflows = [];
    const assetsPath = this.sdk.meta.assetsPath();
    this.sdk.console.log(`Loading workflows from assets path: ${assetsPath}`);

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

            const definition = parseDefinition(definitionContent);
            const manifest = JSON.parse(manifestContent) as Workflow;

            const workflow: Workflow = {
              id: manifest.id ?? dir,
              name: manifest.name ?? definition.name ?? dir,
              description: manifest.description ?? definition.description ?? "",
              version: manifest.version ?? definition.version ?? "1.0.0",
              kind: definition.kind ?? "unknown",
              author: manifest.author,
              url: manifest.url ?? "",
            };

            this.workflows.push(workflow);
            this.sdk.console.log(`Added workflow: ${workflow.name}`);
          }
        } catch (error) {
          this.sdk.console.error(`Error reading workflow files from ${dir}`);
          this.sdk.console.log(
            `Error details: ${
              error instanceof Error ? error.message : String(error)
            }`,
          );
        }
      }
    } catch (error) {
      this.sdk.console.error(
        `Error reading directories from assets path: ${assetsPath}`,
      );
      this.sdk.console.log(
        `Error details: ${
          error instanceof Error ? error.message : String(error)
        }`,
      );
    }

    this.sdk.console.log(`Loaded ${this.workflows.length} workflows`);
  }

  getWorkflows(): Workflow[] {
    return [...this.workflows];
  }

  exists(workflowId: string): boolean {
    return this.workflows.some((workflow) => workflow.id === workflowId);
  }

  getWorkflowDefinition(workflowId: string): unknown {
    if (!this.exists(workflowId)) {
      throw new Error(`Workflow not found: ${workflowId}`);
    }

    const assetsPath = this.sdk.meta.assetsPath();
    const workflowPath = path.join(assetsPath, workflowId, "definition.json");

    try {
      try {
        const fileContent = fs.readFileSync(workflowPath);
        return JSON.parse(fileContent.toString());
      } catch (statError) {
        this.sdk.console.error(`Workflow package not found: ${workflowPath}`);
        return null;
      }
    } catch (error) {
      this.sdk.console.error(`Error loading workflow package: ${workflowPath}`);
      this.sdk.console.log(
        `Error details: ${
          error instanceof Error ? error.message : String(error)
        }`,
      );
      return null;
    }
  }
}
