import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleBarChartComponent } from './components/sample-bar-chart.component';
import { RouterModule } from '@angular/router';
import { DashboardCoreModule } from 'projects/@core/dashboard-core.module';

const routes = [
  {
    path: '',
    component: SampleBarChartComponent,
  },
];

@NgModule({
  declarations: [SampleBarChartComponent],
  imports: [RouterModule.forChild(routes), CommonModule, DashboardCoreModule],
  exports: [SampleBarChartComponent],
})
export class SampleBarChartModule {}
