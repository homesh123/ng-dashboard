import { Component, ViewChild } from '@angular/core';
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
          name: "PRODUCT A",
          data: [44, 55, 41, 67, 22, 43],
          color: "#886fce",
        },
        {
          name: "PRODUCT B",
          data: [13, 23, 20, 8, 13, 27],
          color: "#9c8acf",
        },
        {
          name: "PRODUCT D",
          data: [21, 7, 25, 13, 22, 8],
          color: "#f2f2f2"
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      responsive: [
        {
          breakpoint: 480
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "01/2011",
          "02/2011",
          "03/2011",
          "04/2011",
          "05/2011",
          "06/2011"
        ],
        title: {
          text: "Months"
        }
      },
      yaxis: {
        title: {
          text: "Security ratings"
        }
      },
      fill: {
        opacity: 1
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
