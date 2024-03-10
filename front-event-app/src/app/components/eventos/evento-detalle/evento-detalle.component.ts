import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service'; // Asegúrate de que la ruta es correcta
import { Event } from 'src/app/models/events'; // Asegúrate también de que la ruta del modelo es correcta

@Component({
  selector: 'app-evento-detalle',
  templateUrl: './evento-detalle.component.html',
  styleUrls: ['./evento-detalle.component.scss']
})
export class EventoDetalleComponent implements OnInit {
  evento: Event;
  id: number;

  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.evento = new Event();
    this.eventService.getEventById(this.id).subscribe(data => {
      this.evento = data;
    }, error => console.log(error));
  }
}
