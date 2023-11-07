import { Component, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts'
import { HighchartsChartModule } from 'highcharts-angular';
import { NgApexchartsModule,ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from 'src/app/shared/models/chart-options';
@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss'],
  standalone: true,
  imports: [NgApexchartsModule]
})
export class TopSectionComponent {
  @ViewChild("chart") columnchart: ChartComponent | undefined ;

  public chartOptions: Partial<ChartOptions>;
  public donutChartOptions: Partial<ChartOptions>;
  
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    };

    this.donutChartOptions = {
      series: [
        {
          name: "My-series",
          data: [44, 55, 13, 43, 22],
        }
      ],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    };
  }
 
}
