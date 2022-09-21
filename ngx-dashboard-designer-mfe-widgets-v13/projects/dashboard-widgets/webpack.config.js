const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");
// const dependencies = require("../../package.json").dependencies;

module.exports = withModuleFederationPlugin({
  name: "dashboard_widgets_13",

  exposes: {
    "./WidgetsModule":
      "./projects/dashboard-widgets/src/app/widgets/widgets.module.ts",
    "./BarChartWidget":
      "./projects/dashboard-widgets/src/app/widgets/bar-chart-widget/bar-chart-widget.component.ts",
    "./SearchPage":
      "./projects/dashboard-widgets/src/app/widgets/my-search-page/my-search-page.component.ts",
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
