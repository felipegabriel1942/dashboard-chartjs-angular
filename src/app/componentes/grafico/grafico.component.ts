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

  chart: any;

  ngAfterViewInit() {
    this.grafico(this.idGrafico, this.tipoGrafico);
   }

  public grafico(idGrafico: string, tipoGrafico: string) {
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
              backgroundColor: 'rgba(255, 99, 132, 0.2)'
            }
          ]
        },
        options: {
          legend: {
            display: true
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

}
