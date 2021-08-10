import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
/* import microfrontendLayout from "./microfrontend-layout.html";

const data = {
  props: {
    someText: "This text comes from container through custom props"
  }
}

// @ts-ignore
const routes = constructRoutes(microfrontendLayout, data);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();*/

registerApplication({
  name: "users",
  app: () => System.import("@demo/users"),
  activeWhen: ["/users"],
  customProps: {
    domElementGetter: () => document.getElementById("container"),
    someText: "This text comes from container through custom props",
  },
});

registerApplication({
  name: "navigation",
  app: () => System.import("@demo/navigation"),
  activeWhen: "/",
});

start();
