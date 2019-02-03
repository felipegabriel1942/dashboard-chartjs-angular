import { Component, AfterViewInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements AfterViewInit {

  @Input() idGrafico: string;
  @Input() tipoGrafico: string;
  @Input() dadosGrafico: number[];
  @Input() labelsGrafico: string[];
  @Input() legendGrafico: string;

  coresGraficoPizza: string[] = [];
  chart: any;

  constructor() {
    this.coresGraficoPizza = ['#ff9999', '#99c2ff', '#66ff66', '#ffa64d'];
  }

  ngAfterViewInit() {
    if (this.tipoGrafico === 'bar') {
      this.graficoBarra(this.idGrafico, this.tipoGrafico);
    } else if (this.tipoGrafico === 'pie') {
      this.graficoPizza(this.idGrafico, this.tipoGrafico);
    } else if (this.tipoGrafico === 'horizontalBar') {
      this.graficoBarraHorizontal(this.idGrafico, this.tipoGrafico);
    } else if (this.tipoGrafico === 'line') {
      this.graficoLinhaLinha(this.idGrafico, this.tipoGrafico);
    }
   }

  public graficoBarra(idGrafico: string, tipoGrafico: string) {
    setTimeout(() => {
      this.chart = new Chart(idGrafico, {
        type: tipoGrafico,
        data: {
          labels: this.labelsGrafico,
          datasets: [
            {
              label: this.legendGrafico,
              data: this.dadosGrafico,
              borderColor: '#ff4d4d',
              fill: true,
              backgroundColor: '#ffe6e6',
            }
          ]
        },
        options: {
          plugins: {
            datalabels: {
              anchor: 'end',
              align: 'top',
              formatter: Math.round,
              font: {
                weight: 'bold'
              },
              display: true
            }
          },
          legend: {
            display: false,
            position: 'bottom'
          },
          title: {
            display: true,
            position: 'top',
            text: this.idGrafico,
            fontSize: 18
          },
          scales: {
            xAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
            }
            }],
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
            }
            }],
          }
        }
      });
    });
  }


  public graficoBarraHorizontal(idGrafico: string, tipoGrafico: string) {
    setTimeout(() => {
      this.chart = new Chart(idGrafico, {
        type: tipoGrafico,
        data: {
          labels: this.labelsGrafico,
          datasets: [
            {
              label: this.legendGrafico,
              data: this.dadosGrafico,
              borderColor: '#ff4d4d',
              fill: true,
              backgroundColor: '#ffe6e6',
              datalabels: {
                color: 'black'
              }
            }
          ]
        },
        options:
        { plugins: {
          datalabels: {
            anchor: 'end',
            align: 'right',
            formatter: Math.round,
            font: {
              weight: 'bold'
            },
            display: true
          }
        },
          maintainAspectRatio: false,
          legend: {
            display: false,
            position: 'bottom'
          },
          title: {
            display: true,
            position: 'top',
            text: this.idGrafico,
            fontSize: 18
          },
          scales: {
            xAxes: [{
              display: false,
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
            }
            }],
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
            }
            }],
          },
        }
      });
    });
  }


  public graficoLinhaLinha(idGrafico: string, tipoGrafico: string) {
    setTimeout(() => {
      this.chart = new Chart(idGrafico, {
        type: tipoGrafico,
        data: {
          labels: this.labelsGrafico,
          datasets: [
            {
              label: this.legendGrafico,
              data: this.dadosGrafico,
              borderColor: '#ff4d4d',
              fill: true,
              backgroundColor: '#ffe6e6'
            }
          ]
        },
        options: { plugins: {
          datalabels: {
            anchor: 'end',
            align: 'top',
            formatter: Math.round,
            font: {
              weight: 'bold'
            },
            display: false
          }
        },
          maintainAspectRatio: false,
          legend: {
            display: false,
            position: 'bottom'
          },
          title: {
            display: true,
            position: 'top',
            text: this.idGrafico,
            fontSize: 18
          },
          scales: {
            xAxes: [{
              display: false,
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
            }
            }],
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
            }
            }],
          }
        }
      });
    });
  }

  public graficoPizza(idGrafico: string, tipoGrafico: string) {
    setTimeout(() => {
      this.chart = new Chart(idGrafico, {
        type: tipoGrafico,
        data: {
          labels: this.labelsGrafico,
          datasets: [
            {
              label: this.legendGrafico,
              data: this.dadosGrafico,
              borderColor: '#3cba9f',
              fill: false,
              backgroundColor: this.coresGraficoPizza            }
          ]
        },
        options: {
          animation: {
            duration: 1000,
            easing: 'linear'
          },
          legend: {
            display: true,
            position: 'right'
          },
          title: {
            display: true,
            position: 'top',
            text: this.idGrafico,
            fontSize: 18
          },
          scales: {
            xAxes: [{
              display: false,
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
            }
            }],
            yAxes: [{
              display: false,
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
            }
            }],
          }
        }
      });
    });
  }

}
