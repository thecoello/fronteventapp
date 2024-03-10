import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service'; // Verifica la ruta correcta
import { Event } from 'src/app/models/events'; // Asegúrate que la ruta al modelo es correcta

@Component({
  selector: 'app-evento-listar',
  templateUrl: './evento-listar.component.html',
  styleUrls: ['./evento-listar.component.scss']
})
export class EventoListarComponent implements OnInit {
  eventos: Event[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.retrieveEvents();
  }

  retrieveEvents(): void {
    this.eventService.getEventList().subscribe(
      (data) => {
        this.eventos = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
