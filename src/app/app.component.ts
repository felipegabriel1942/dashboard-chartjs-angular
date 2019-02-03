import { Component, OnInit} from '@angular/core';
import { Dados } from '../app/models/dados.model';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public listaDeGraficos: Dados[] = [];
  maioresPublicos;
  grafico2;
  grafico3;
  cardVitoria;
  cardDerrotas;
  cardEmpates;
  cardPontosGanhos;
  cardGolsMarcados;
  cardGolsSofridos;
  cardTitulosNacionaisFortaleza;
  cardTitulosNacionaisCeara;


  constructor() {
    this.maioresPublicos = new Dados('5 Maiores públicos',
     [57223, 57223, 50165, 46630, 39463],
     ['1', '2', '3', '4', '5'],
     'Público',
     'bar');
     this.grafico2 = new Dados('Receitas mês a mês',
     [155, 230, 450, 126, 356, 459, 523, 456, 236, 789, 129, 359],
     ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
     'Receita',
     'bar');
     this.grafico3 = new Dados('Tipos de despesa',
     [630, 750, 1250, 1000 ],
     ['Saúde', 'Transporte', 'Cartão de Crédito', 'Alimentação'],
     'Receita',
     'pie');
     this.cardVitoria = new Dados('Vitórias',
     [21],
     [],
     '',
     'card');
     this.cardDerrotas = new Dados('Derrotas',
     [9],
     [],
     '',
     'card');
     this.cardEmpates = new Dados('Empates',
     [8],
     [],
     '',
     'card');
     this.cardPontosGanhos = new Dados('Pontos ganhos',
     [71],
     [],
     '',
     'card');
     this.cardGolsMarcados = new Dados('Gols marcados',
     [54],
     [],
     '',
     'card');
     this.cardGolsSofridos = new Dados('Gols sofridos',
     [33],
     [],
     '',
     'card');
     this.cardTitulosNacionaisFortaleza = new Dados('Títulos nacionais Fortaleza',
     [1],
     [],
     '',
     'card');
     this.cardTitulosNacionaisCeara = new Dados('Títulos nacionais Ceará',
     [0],
     [],
     '',
     'card');
    this.listaDeGraficos.push( this.cardVitoria, this.cardDerrotas, this.cardEmpates,
      this.cardPontosGanhos, this.cardGolsMarcados, this.cardGolsSofridos , this.cardTitulosNacionaisFortaleza,
      this.cardTitulosNacionaisCeara, this.maioresPublicos, this.grafico2, this.grafico3 );
  }

  ngOnInit() {
    console.log(this.listaDeGraficos);
  }
}
