import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from 'src/app/models/events';

@Component({
  selector: 'app-creacionevento',
  templateUrl: './creacionevento.component.html',
  styleUrls: ['./creacionevento.component.scss']
})
export class CreacioneventoComponent {

  modelEvento: Event = new Event()
  creatingEvent: boolean = false
  registerEventOk?: string
  registerEventKo?: string
  inputsValidate?: boolean = false

  eventsWithZones: boolean = false

  constructor() { }

  eventZones(event: any){
    !this.eventsWithZones ? this.eventsWithZones = true : this.eventsWithZones = false
  }


  onSubmit(registroEvento: NgForm, event: any): void {

      this.creatingEvent = true


     
  }
}
