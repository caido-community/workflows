import { Classic } from "@caido/primevue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import TooltipDirective from "primevue/tooltip";
import { createApp } from "vue";

import { SDKPlugin } from "./plugins/sdk";
import "./styles/index.css";
import type { FrontendSDK } from "./types";
import App from "./views/App.vue";

export const init = (sdk: FrontendSDK) => {
  const app = createApp(App);

  app.use(PrimeVue, {
    unstyled: true,
    pt: Classic,
  });

  app.use(SDKPlugin, sdk);
  app.directive("tooltip", TooltipDirective);

  const pinia = createPinia();
  app.use(pinia);

  const root = document.createElement("div");
  Object.assign(root.style, {
    height: "100%",
    width: "100%",
  });

  root.id = `workflows-store`;

  app.mount(root);

  sdk.navigation.addPage("/workflows-store", {
    body: root,
  });

  sdk.sidebar.registerItem("Workflows Store", "/workflows-store", {
    icon: "fas fa-store",
  });
};
