import { Component, OnInit} from '@angular/core';
import { Dados } from '../app/models/dados.model';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public listaDeGraficos: Dados[] = [];
  grafico1;
  grafico2;


  constructor() {
    this.grafico1 = new Dados('Despesas mês a mês',
     [150, 200, 350, 400, 560, 320, 456, 125, 356, 459, 159, 259],
     ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
     'Despesa',
     'line');
     this.grafico2 = new Dados('Receitas mês a mês',
     [155, 230, 450, 126, 356, 459, 523, 456, 236, 789, 129, 359],
     ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
     'Receita',
     'bar');
    this.listaDeGraficos.push(this.grafico1, this.grafico2);
  }

  ngOnInit() {
    console.log(this.listaDeGraficos);
  }
}
