# Dashboard widgets using Module federation.

Demonstrates webpack 5 Module Federation with Angular and the Angular Router.

## Start

- Install dependencies with yarn (!)
  - You need to use yarn until Angular 12 (May 2021) to use the experimental opt-in for webpack 5
  - Beginning with Angular 12, webpack 5 will be active by default
- Run Micro Frontend for dashboard widgets
  - nng serve dashboard-widgets -o
- Run the shell
  - ng serve shell -o

- Run all MFE'shell
  - npm run start:all


  ## create new widget application and add module federation
   1. ng g application dashboard-widgets --style scss --routing true
   2. ng add @angular-architects/module-federation
