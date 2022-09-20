import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardCoreModule } from 'projects/@core/dashboard-core.module';
import { BarChartComponent } from 'projects/@core/components/bar-chart/bar-chart.component';
import { MySearchPageComponent } from './my-search-page/my-search-page.component';
import { BarchartWidgetComponent } from './bar-chart-widget/bar-chart-widget.component';
// import { AppointmentsWidgetComponent } from './appointments-widget/components/appointments-widget.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

const routes = [
  { path: '', component: BarchartWidgetComponent },
  {
    path: 'bar-chart',
    component: BarchartWidgetComponent,
  },
  // {
  //   path: 'appointment-chart',
  //   component: BarchartWidgetComponent,
  // },
  {
    path: 'search',
    component: MySearchPageComponent,
  },
];

@NgModule({
  declarations: [BarchartWidgetComponent, MySearchPageComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    DashboardCoreModule,
    FlexLayoutModule,
    MatIconModule,
  ],
  exports: [BarchartWidgetComponent, BarChartComponent],
})
export class WidgetsModule {}
