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
  golsPorJogador;
  vitoriasDentroFora;
  cardVitoria;
  cardDerrotas;
  cardEmpates;
  cardPontosGanhos;
  cardGolsMarcados;
  cardGolsSofridos;
  cardTitulosNacionaisFortaleza;
  cardTitulosNacionaisCeara;
  evolucaoPontosGanhos;
  pontosGanhosSobreDisputados;


  constructor() {
    this.maioresPublicos = new Dados('5 Maiores públicos',
     [57223, 57223, 50165, 46630, 39463],
     ['1', '2', '3', '4', '5'],
     'Público',
     'bar');
     this.golsPorJogador = new Dados('10 Maiores goleadores',
     [13, 7, 4, 3, 3, 3, 3, 2, 2 , 2],
     ['Gustavo', 'Bruno', 'Dodô', 'Luís', 'Ederson', 'Marcio', 'Marlon', 'Guilherme', 'Edinho', 'Ligger'],
     'Gols',
     'horizontalBar');
     this.evolucaoPontosGanhos = new Dados('Evolução de pontos ganhos',
     [3, 6, 9, 10, 13, 16, 19, 22, 23, 23, 26, 26, 29, 29, 29,
      30,31,34,37,40,43,43,46,46,47,47,47,50,53,56,57,60,61,64,65,68,71],
     ['1','2','3','4','5','6','7','8','9','10','1','12','13','14','15','16','17','18','19','20',
     '21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38'],
     'Pontos',
     'line');
     this.vitoriasDentroFora = new Dados('Vitórias Mandante x Visitante',
     [13, 8 ],
     ['Mandante', 'Visitante'],
     '',
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
     this.pontosGanhosSobreDisputados = new Dados('Pontos Ganhos/Disputados',
     [62],
     [],
     '',
     'progress');
    this.listaDeGraficos.push( this.cardVitoria, this.cardDerrotas, this.cardEmpates,
      this.cardPontosGanhos, this.cardGolsMarcados, this.cardGolsSofridos , this.cardTitulosNacionaisFortaleza,
      this.cardTitulosNacionaisCeara, this.maioresPublicos, this.vitoriasDentroFora,  this.evolucaoPontosGanhos, 
       this.golsPorJogador , this.pontosGanhosSobreDisputados );
  }

  ngOnInit() {
    console.log(this.listaDeGraficos);
  }
}
