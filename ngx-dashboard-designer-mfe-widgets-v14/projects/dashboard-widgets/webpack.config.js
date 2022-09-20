const {
  shareAll,
  share,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");
// const dependencies = require("../../package.json").dependencies;

module.exports = withModuleFederationPlugin({
  name: "dashboard_widgets",

  exposes: {
    "./WidgetsModule":
      "./projects/dashboard-widgets/src/app/widgets/widgets.module.ts",
    "./BarChartWidget":
      "./projects/dashboard-widgets/src/app/widgets/bar-chart-widget/bar-chart-widget.component.ts",
    "./SearchPage":
      "./projects/dashboard-widgets/src/app/widgets/my-search-page/my-search-page.component.ts",
  },
  shared: share({
    "@angular/animations": {
      singleton: true,
      strictVersion: true,
      requiredVersion: false,
    },
    "@angular/common": {
      singleton: true,
      strictVersion: true,
      requiredVersion: false,
    },
    "@angular/compiler": {
      singleton: true,
      strictVersion: true,
      requiredVersion: false,
    },
    "@angular/core": {
      singleton: true,
      strictVersion: true,
      requiredVersion: false,
    },
    "@angular/flex-layout": {
      singleton: true,
      strictVersion: true,
      requiredVersion: false,
    },
    "@angular/forms": {
      singleton: true,
      strictVersion: true,
      requiredVersion: false,
    },
    "@angular/material": {
      singleton: true,
      strictVersion: true,
      requiredVersion: false,
    },
    "@angular/platform-browser": {
      singleton: true,
      strictVersion: true,
      requiredVersion: false,
    },
    "@angular/platform-browser-dynamic": {
      singleton: true,
      strictVersion: true,
      requiredVersion: false,
    },
    "@angular/router": {
      singleton: true,
      strictVersion: true,
      requiredVersion: false,
    },
    "@angular-architects/module-federation": {
      singleton: true,
      strictVersion: true,
      requiredVersion: false,
    },
    "@nrwl/workspace": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@types/chartjs": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "chart.js": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    rxjs: {
      singleton: true,
      strictVersion: true,
      requiredVersion: false,
    },
  }),
  // shared: [
  //   "@angular/animations",
  //   "@angular/common",
  //   "@angular/compiler",
  //   "@angular/core",
  //   "@angular/flex-layout",
  //   "@angular/forms",
  //   "@angular/material",
  //   "@angular/platform-browser",
  //   "@angular/platform-browser-dynamic",
  //   "@angular/router",
  //   "@angular-architects/module-federation",
  //   "@nrwl/workspace",
  //   "@types/chartjs",
  //   "chart.js",
  //   "rxjs",
  //   "tslib",
  //   "uuidv4",
  //   "zone.js",
  // ],
  // shared: {
  //   ...shareAll({
  //     singleton: false,
  //     strictVersion: true,
  //     requiredVersion: "auto",
  //   }),
  // },
});
