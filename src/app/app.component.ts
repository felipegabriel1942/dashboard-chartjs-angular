import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  chart: any;
  public idGrafico: string;
  public tipoGrafico: string;


  constructor() {
    this.idGrafico = 'canvas';
    this.tipoGrafico = 'line';
  }

  ngOnInit() {
  }
}
