const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
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
  shared: {
    ...shareAll({
      singleton: false,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
