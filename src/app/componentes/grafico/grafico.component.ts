import { Component, AfterViewInit, Input } from '@angular/core';
import { Chart } from 'chart.js';


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
    this.coresGraficoPizza = ['red', 'blue', 'black', 'yellow'];
  }

  ngAfterViewInit() {
    if (this.tipoGrafico === 'bar') {
      this.graficoBarra(this.idGrafico, this.tipoGrafico);
    } else if (this.tipoGrafico === 'pie') {
      this.graficoPizza(this.idGrafico, this.tipoGrafico);
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
              fill: false,
              backgroundColor: 'red'
            }
          ]
        },
        options: {
          legend: {
            display: true,
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
          legend: {
            display: true,
            position: 'right'
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
