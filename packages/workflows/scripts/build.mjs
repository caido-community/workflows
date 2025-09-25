// Get each definition.json file in the directories of the src folder
// Check if there is a node in the nodes array with the definition_id of "caido/code-js"
// If there is, get the alias of the node, and check if there is a file in the folder with the same name as the alias
// If there is, build the file using vitejs build API and copy the build output to dist-workflows/<workflow_name>/<alias>.js

import { build } from "vite";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { builtinModules } from "module";
import { z } from "zod";
import { minify } from "terser";
import Ajv from "ajv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");
const distDir = path.join(rootDir, "..", "..", "dist-workflows");

// JSON Schema for workflow definitions
const schemaPath = path.join(
  rootDir,
  "schemas",
  "workflow-definition.schema.json"
);
const ajv = new Ajv({ allErrors: true, allowUnionTypes: true, strict: false });
const definitionSchema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));
const validateDefinition = ajv.compile(definitionSchema);
const validateDefinitionFile = (workflowDir, definition) => {
  const ok = validateDefinition(definition);
  if (ok) {
    return;
  }

  const errors = validateDefinition.errors || [];
  const message = errors
    .map((e) => {
      const p = e.instancePath === "" ? "/" : e.instancePath;
      return `${p} ${e.message}`;
    })
    .join(", ");
  throw new Error(`[!] Invalid definition for ${workflowDir}: ${message}`);
};

/**
 * Plugin to apply terser during bundle generation.
 * Vite doesn't minify ES module libs.
 */
function terserPlugin() {
  return {
    name: "terser",
    async renderChunk(code, chunk) {
      // Only JS
      if (!chunk.fileName.endsWith(".mjs") && !chunk.fileName.endsWith(".js")) {
        return null;
      }

      const result = await minify(code, {
        compress: {
          defaults: false,
          module: true,
          hoist_props: true,
          unused: true,
          booleans_as_integers: true,
        },
        mangle: {
          toplevel: false,
          properties: {
            // Short attribute names for internal props
            regex: "^\\$.+\\$$|^[A-Z][a-zA-Z]+$",
          },
        },
        format: {
          comments: true,
        },
      });

      return result.code || null;
    },
  };
}

/**
 * Builds a file using vitejs build API
 * @param {string} entrypoint - The path to the entrypoint file
 * @param {string} workflowDir - The path to the workflow directory
 * @returns {string} The path to the dist file
 */
const buildFile = async (entrypoint, workflowDir) => {
  const outDir = path.join(distDir, path.basename(workflowDir));

  await build({
    plugins: [terserPlugin()],
    build: {
      lib: {
        entry: entrypoint,
        fileName: (_, entryName) => `${entryName}.js`,
        formats: ["es"],
      },
      outDir,
      rollupOptions: {
        external: [/caido:.+/, ...builtinModules],
        output: {
          manualChunks: undefined,
        },
      },
    },
  });

  const fileName = path.basename(entrypoint).split(".")[0];
  return path.join(outDir, `${fileName}.js`);
};

/**
 * Read the workflow definition file of a workflow directory
 * @param {string} workflowDir - The path to the workflow directory
 * @returns {Object} The workflow definition
 */
const readWorkflowDefinition = (workflowDir) => {
  const definitionPath = path.join(
    rootDir,
    "src",
    workflowDir,
    "definition.json"
  );
  try {
    return JSON.parse(fs.readFileSync(definitionPath, "utf8"));
  } catch (e) {
    throw new Error(`[!] Failed to read ${definitionPath}`);
  }
};

/**
 * Read the workflow manifest file of a workflow directory
 * @param {string} workflowDir - The path to the workflow directory
 * @returns {Object} The workflow manifest
 */
const readWorkflowManifest = (workflowDir) => {
  const manifestPath = path.join(rootDir, "src", workflowDir, "manifest.json");
  try {
    return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  } catch (e) {
    throw new Error(`[!] Failed to read ${manifestPath}`);
  }
};

const authorSchema = z.object({
  name: z.string().min(1, "Author name is required"),
  email: z.string().optional(),
});

const manifestSchema = z.object({
  id: z.string().min(1, "ID is required"),
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  url: z.string().min(1, "URL is required"),
  author: authorSchema,
  version: z.string().min(1, "Version is required"),
});

/**
 * Validates manifest
 * @param {string} workflowDir - The path to the workflow directory
 * @param {Object} definition - The workflow definition
 * @param {Object} manifest - The workflow manifest
 */
const validateManifest = (workflowDir, definition, manifest) => {
  try {
    // Validate manifest against schema
    manifestSchema.parse(manifest);

    // Validate ID matches directory name
    if (workflowDir !== manifest.id) {
      throw new Error(
        `Workflow ID mismatch in ${workflowDir}: workflowDir (${workflowDir}) != manifest.id (${manifest.id})`
      );
    }

    // Validate name matches definition
    if (manifest.name !== definition.name) {
      throw new Error(
        `Workflow name mismatch in ${workflowDir}: manifest.name (${manifest.name}) != definition.name (${definition.name})`
      );
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const issues = error.issues
        .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
        .join(", ");
      throw new Error(`[!] Invalid manifest for ${workflowDir}: ${issues}`);
    }
    throw error;
  }
};

/**
 * Writes the updated workflow definition to the dist folder
 * @param {string} workflowDir - The path to the workflow directory
 * @param {Object} definition - The workflow definition
 * @param {Object} manifest - The workflow manifest
 */
const writeWorkflow = (workflowDir, definition, manifest) => {
  const distWorkflowDir = path.join(distDir, workflowDir);
  if (!fs.existsSync(distWorkflowDir)) {
    fs.mkdirSync(distWorkflowDir, { recursive: true });
  }

  const definitionPath = path.join(distWorkflowDir, "definition.json");
  fs.writeFileSync(definitionPath, JSON.stringify(definition, null, 2));

  const manifestPath = path.join(distWorkflowDir, "manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
};

/**
 * Generates a "code" input for a Javascript node
 * @param {string} jsFile - The path to the JS file
 * @returns {Object} The "code" input
 */
const generateCodeInput = (jsFile) => {
  const code = fs.readFileSync(jsFile, "utf8");
  return {
    alias: "code",
    value: {
      data: code,
      kind: "string",
    },
  };
};

const workflowDirs = fs.readdirSync(path.join(rootDir, "src"));
console.log(`[*] Found ${workflowDirs.length} workflows`);

for (const workflowDir of workflowDirs) {
  console.log(`[*] Processing ${workflowDir} workflow`);

  const definition = readWorkflowDefinition(workflowDir);
  const manifest = readWorkflowManifest(workflowDir);

  // Validate definition against JSON Schema
  validateDefinitionFile(workflowDir, definition);

  // Validate manifest
  validateManifest(workflowDir, definition, manifest);

  const jsNodes = definition.graph.nodes.filter(
    (node) =>
      node.definition_id === "caido/code-js" ||
      node.definition_id === "caido/http-code-js"
  );
  for (const jsNode of jsNodes) {
    console.log(`[*]    Processing "${jsNode.alias}" node`);
    const alias = jsNode.alias;
    const scriptPath = path.join(rootDir, "src", workflowDir, `${alias}.ts`);

    if (fs.existsSync(scriptPath)) {
      console.log(`[*]    Building ${scriptPath}`);
      const distFile = await buildFile(scriptPath, workflowDir);
      const codeInput = generateCodeInput(distFile);
      jsNode.inputs = jsNode.inputs.map((input) => {
        if (input.alias === "code") {
          return codeInput;
        }

        return input;
      });
      fs.unlinkSync(distFile);
    } else {
      console.warn(`[!]    No external script at ${scriptPath}`);
      if (jsNode.value.data === "") {
        throw new Error(
          `[!]    No code provided for ${jsNode.alias} node. The alias for code nodes should match the name of the TypeScript file. We usually use the alias "javascript" with a corresponding javascript.ts file.`
        );
      }
    }
  }

  // Writing the updated workflow files
  console.log(`[*]    Writing workflow files`);
  writeWorkflow(workflowDir, definition, manifest);
}
