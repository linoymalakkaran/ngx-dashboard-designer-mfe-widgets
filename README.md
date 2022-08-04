# FederationDemo

Demonstrates webpack 5 Module Federation with Angular and the Angular Router.

## Start

- Install dependencies with yarn (!)
  - You need to use yarn until Angular 12 (May 2021) to use the experimental opt-in for webpack 5
  - Beginning with Angular 12, webpack 5 will be active by default
- Run Micro Frontend 1
  - ng serve flights_widget -o
- Run Micro Frontend 2
  - ng serve booking_widget -o
- Run the shell
  - ng serve shell -o


  ## create new widget application and add module federation
   ng g application dashboard-widgets --style scss --routing true
   ng add @angular-architects/module-federation
