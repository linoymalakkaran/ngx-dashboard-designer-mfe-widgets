const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");
const dependencies = require("../../package.json").dependencies;

module.exports = withModuleFederationPlugin({
  shared: {
    "@angular/common/http": {
      version: dependencies["@angular/common"],
      requiredVersion: dependencies["@angular/common"],
      singleton: true,
    },
    "@angular/common": {
      version: dependencies["@angular/common"],
      requiredVersion: dependencies["@angular/common"],
      singleton: true,
    },
    "@angular/core": {
      version: dependencies["@angular/core"],
      requiredVersion: dependencies["@angular/core"],
      singleton: true,
    },
    "@angular/platform-browser": {
      version: dependencies["@angular/platform-browser"],
      requiredVersion: dependencies["@angular/platform-browser"],
      singleton: true,
    },
    "@angular/platform-browser-dynamic": {
      version: dependencies["@angular/platform-browser-dynamic"],
      requiredVersion: dependencies["@angular/platform-browser-dynamic"],
      singleton: true,
    },
    "@angular/router": {
      version: dependencies["@angular/router"],
      requiredVersion: dependencies["@angular/router"],
      singleton: true,
    },
    "@angular/animations": {
      version: dependencies["@angular/animations"],
      requiredVersion: dependencies["@angular/animations"],
      singleton: true,
    },
    "@angular/forms": {
      version: dependencies["@angular/forms"],
      requiredVersion: dependencies["@angular/forms"],
      singleton: true,
    },
    // ...shareAll({
    //   singleton: true,
    //   strictVersion: true,
    //   requiredVersion: "auto",
    // }),
  },
});
