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
  chart: any;

  ngAfterViewInit() {
    this.graficoBarra(this.idGrafico, this.tipoGrafico);
   }

  public graficoBarra(idGrafico: string, tipoGrafico: string) {
    setTimeout(() => {
      this.chart = new Chart(idGrafico, {
        type: tipoGrafico,
        data: {
          labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
          datasets: [
            {
              label: 'Despesa',
              data: [10, 15, 20],
              borderColor: '#3cba9f',
              fill: false,
              backgroundColor: 'rgba(255, 99, 132, 0.2)'
            },
            {
              label: 'Receita',
              data: [12, 13, 15],
              borderColor: '#ffcc00',
              fill: false,
              backgroundColor: 'rgba(255, 206, 86, 0.2)'
            },
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
