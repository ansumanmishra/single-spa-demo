import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
/* import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
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
  app: () => System.import("//localhost:9002/main.js"),
  activeWhen: ["/users"],
  customProps: {
    domElementGetter: () => document.getElementById("container"),
    someText: "Hello",
  },
});

start();
