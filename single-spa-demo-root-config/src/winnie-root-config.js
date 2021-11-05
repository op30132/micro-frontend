import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes({
  routes: [
    { type: "application", name: "@winnie/spa-header" },
    {
      mode: "hash|history",
      base: "/",
      routes: [
        {
          type: "route",
          path: "home",
          routes: [{ type: "application", name: "@winnie/spa-home" }],
          default: false,
        },
        {
          type: "route",
          path: "test",
          routes: [{ type: "application", name: "@winnie/spa-test-page" }],
          default: false,
        },
      ],
    },
  ],
});
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);

start();
