import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sample-bar-chart',
    pathMatch: 'full',
  },
  {
    path: 'sample-bar-chart',
    loadChildren: () =>
      import('./sample-bar-chart/sample-bar-chart.module').then(
        (m) => m.SampleBarChartModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
