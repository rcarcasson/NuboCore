import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda/agenda.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AgendaComponent, PagesComponent, InicioComponent],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    SharedModule,
    FullCalendarModule,
    FormsModule
  ],
  exports: [
    AgendaComponent, InicioComponent
  ]
})
export class PagesModule { }
