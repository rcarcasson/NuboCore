import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  // Enlace con input para descripcion, fecha-hora de reserva y reserva
  descripcion = '';
  fechahora = '';

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() }
  ];

  handleDateClick(arg) {
    // this.fechahora = arg.date;
    console.log('Fecha en click', arg.date);
  }

  editarEvento(arg) {
    alert(arg.dateStr);
  }

  constructor() {}

  ngOnInit() {
    this.calendarComponent.locales = esLocale;
    this.calendarComponent.locale = 'es';
    this.calendarComponent.validRange = {start: new Date()};
    this.calendarComponent.businessHours = {daysOfWeek: [1, 2, 3, 4, 5], startTime: '09:00', endTime: '18:30'};
  }

  guardar() {
    this.calendarEvents = this.calendarEvents.concat({
      title: this.descripcion,
      start: this.fechahora,
      allDay: false
    });
    this.descripcion = '';
    this.fechahora = '';

  }

}
