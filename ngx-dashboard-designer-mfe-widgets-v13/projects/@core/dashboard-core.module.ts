import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { WidgetWrapperComponent } from './components/widget-wrapper/widget-wrapper.component';

@NgModule({
  declarations: [BarChartComponent, WidgetWrapperComponent],
  imports: [CommonModule],
  exports: [BarChartComponent, WidgetWrapperComponent],
  providers: [],
  bootstrap: [],
})
export class DashboardCoreModule {}
