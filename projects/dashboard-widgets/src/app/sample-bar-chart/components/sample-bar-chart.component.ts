import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-sample-bar-chart',
  templateUrl: './sample-bar-chart.component.html',
  styleUrls: ['./sample-bar-chart.component.scss'],
})
export class SampleBarChartComponent implements OnInit {
  barChartData: any;
  barChartOptions: any;
  labelyColor = '#8F9AB3';
  labelxColor = '#8E9AAF';
  chartId: string = uuidv4();

  constructor() {}

  ngOnInit(): void {
    this.barChartData = {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      datasets: [
        {
          barPercentage: 0.4,
          categoryPercentage: 0.6,
          label: '1color',
          backgroundColor: '#605A92',
          data: [120, 130, 125, 120, 110, 120, 110, 120, 100, 90, 140, 150],
        },
        {
          barPercentage: 0.4,
          categoryPercentage: 0.6,
          label: '1color',
          backgroundColor: '#C5D2E7',
          data: [110, 120, 115, 110, 100, 110, 100, 90, 80, 120, 100, 90],
        },
      ],
    };

    this.barChartOptions = {
      maintainAspectRatio: false,
      tooltips: {
        enabled: false,
      },
      plugins: {
        datalabels: {
          display: false,
        },
        labels: false,
      },
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              fontSize: 12,
              fontColor: this.labelxColor,
              beginAtZero: true,
              stepSize: 1,
              suggestedMin: 0,
              suggestedMax: 12,
            },
            // barThickness: 15,
            // barPercentage: 0.4,
            // categoryPercentage: 0.6,
            gridLines: {
              offsetGridLines: false,
              display: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              fontSize: 12,
              fontColor: this.labelyColor,
              beginAtZero: true,
              stepSize: 40,
              suggestedMin: 0,
              suggestedMax: 160,
            },
          },
        ],
      },
    };
  }
}
