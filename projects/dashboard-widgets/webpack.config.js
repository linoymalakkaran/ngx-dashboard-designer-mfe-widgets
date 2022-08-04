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
    // "@angular/common/http": {
    //   version: dependencies["@angular/common"],
    //   requiredVersion: dependencies["@angular/common"],
    //   singleton: true,
    // },
    // "@angular/common": {
    //   version: dependencies["@angular/common"],
    //   requiredVersion: dependencies["@angular/common"],
    //   singleton: true,
    // },
    // "@angular/core": {
    //   version: dependencies["@angular/core"],
    //   requiredVersion: dependencies["@angular/core"],
    //   singleton: true,
    // },
    // "@angular/platform-browser": {
    //   version: dependencies["@angular/platform-browser"],
    //   requiredVersion: dependencies["@angular/platform-browser"],
    //   singleton: true,
    // },
    // "@angular/platform-browser-dynamic": {
    //   version: dependencies["@angular/platform-browser-dynamic"],
    //   requiredVersion: dependencies["@angular/platform-browser-dynamic"],
    //   singleton: true,
    // },
    // "@angular/router": {
    //   version: dependencies["@angular/router"],
    //   requiredVersion: dependencies["@angular/router"],
    //   singleton: true,
    // },
    // "@angular/animations": {
    //   version: dependencies["@angular/animations"],
    //   requiredVersion: dependencies["@angular/animations"],
    //   singleton: true,
    // },
    // "@angular/forms": {
    //   version: dependencies["@angular/forms"],
    //   requiredVersion: dependencies["@angular/forms"],
    //   singleton: true,
    // },
    // "chart.js": {
    //   version: dependencies["chart.js"],
    //   requiredVersion: dependencies["chart.js"],
    //   singleton: true,
    // },
    // "uuidv4": {
    //   version: dependencies["uuidv4"],
    //   requiredVersion: dependencies["uuidv4"],
    //   singleton: true,
    // },
    // "@types/chartjs": {
    //   version: dependencies["@types/chartjs"],
    //   requiredVersion: dependencies["@types/chartjs"],
    //   singleton: true,
    // },
    // "@nrwl/workspace": {
    //   version: dependencies["@nrwl/workspace"],
    //   requiredVersion: dependencies["@nrwl/workspace"],
    //   singleton: true,
    // },
    // "rxjs": {
    //   version: dependencies["rxjs"],
    //   requiredVersion: dependencies["rxjs"],
    //   singleton: true,
    // },
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
