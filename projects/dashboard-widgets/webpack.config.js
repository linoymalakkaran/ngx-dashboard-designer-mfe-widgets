const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");
// const dependencies = require("../../package.json").dependencies;

module.exports = withModuleFederationPlugin({
  name: "dashboard_widgets",

  exposes: {
    "./Module":
      "./projects/dashboard-widgets/src/app/sample-bar-chart/sample-bar-chart.module.ts",
    "./Component":
      "./projects/dashboard-widgets/src/app/sample-bar-chart/components/sample-bar-chart.component.ts",
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
