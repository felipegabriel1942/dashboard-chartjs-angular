import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraficoComponent } from './componentes/grafico/grafico.component';
import { BarraSuperiorComponent } from './template/barra-superior/barra-superior.component';

import { NgCircleProgressModule } from 'ng-circle-progress';

import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';

@NgModule({
  declarations: [
    AppComponent,
    GraficoComponent,
    BarraSuperiorComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    PanelModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 0,
      outerStrokeColor: '#99c2ff',
      innerStrokeColor: '',
      animationDuration: 300
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
