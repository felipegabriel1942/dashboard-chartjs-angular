import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraficoComponent } from './componentes/grafico/grafico.component';
import { BarraSuperiorComponent } from './template/barra-superior/barra-superior.component';

import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    GraficoComponent,
    BarraSuperiorComponent
  ],
  imports: [
    BrowserModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
