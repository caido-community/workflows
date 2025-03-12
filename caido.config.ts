import { defineConfig } from '@caido-community/dev';
import vue from '@vitejs/plugin-vue';
import tailwindcss from "tailwindcss";
import tailwindPrimeui from "tailwindcss-primeui";
import tailwindCaido from "@caido/tailwindcss";
// @ts-expect-error
import path from "path";
import prefixwrap from "postcss-prefixwrap";

const id = "workflows-store";
export default defineConfig({
  id,
  name: "Workflows Store",
  description: "Collection of useful Caido workflows",
  version: "0.0.1",
  author: {
    name: "Caido Labs Inc.",
    email: "dev@caido.io",
    url: "https://caido.io",
  },
  plugins: [
    {
      kind: "backend",
      id: "backend",
      root: "packages/backend",
      assets: ["dist-workflows/**"]
    },
    {
      kind: "frontend",
      id: "frontend",
      root: "packages/frontend",
      backend: {
        id: "backend",
      },
      vite: {
        // @ts-expect-error
        plugins: [vue()],
        build: {
          rollupOptions: {
            external: ["@caido/frontend-sdk"],
          },
        },
        resolve: {
          alias: [
            {
              find: "@",
              // @ts-expect-error
              replacement: path.resolve(__dirname, "packages/frontend/src"),
            },
          ],
        },
        css: {
          postcss: {
            plugins: [
              prefixwrap(`#plugin--${id}`),

              tailwindcss({
                corePlugins: {
                  preflight: false,
                },
                content: [
                  "./packages/frontend/src/**/*.{vue,ts}",
                  "./node_modules/@caido/primevue/dist/primevue.mjs",
                ],
                darkMode: ["selector", '[data-mode="dark"]'],
                plugins: [
                  tailwindPrimeui,
                  tailwindCaido,
                ],
              }),
            ],
          },
        },
      },
    },
  ],
});
