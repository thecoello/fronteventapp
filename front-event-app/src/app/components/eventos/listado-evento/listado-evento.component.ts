import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-listado-evento',
  templateUrl: './listado-evento.component.html',
  styleUrls: ['./listado-evento.component.scss']
})
export class ListadoEventoComponent implements OnInit {
 
  listadoEvento?: Array<any> 

  constructor(private eventservice: EventService, private router: Router) { }
  ngOnInit(): void {
    this.eventservice.getEventList().subscribe((response) =>{
   
    this.listadoEvento = response
   console.log(this.listadoEvento)
    })
  }
}