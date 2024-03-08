import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from 'src/app/models/events';
import { Zones } from 'src/app/models/zones';

@Component({
  selector: 'app-creacionevento',
  templateUrl: './creacionevento.component.html',
  styleUrls: ['./creacionevento.component.scss']
})
export class CreacioneventoComponent implements OnInit {

  modelEvento: Event = new Event()
  modelZones: Zones = new Zones()
  allZones: Array<Zones> = [this.modelZones]

  creatingEvent: boolean = false
  registerEventOk?: string
  registerEventKo?: string
  inputsValidate?: boolean = false

  eventsWithZones: boolean = false

  eventOnline: boolean = false

  constructor() { }
  ngOnInit(): void {
    this.modelEvento.tipoEvento = ""
  }

  eventOnlineCheck(event: any){
    event.target.value == "online" ? this.eventOnline = true : this.eventOnline = false
  }

  eventZones(event: any){
    !this.eventsWithZones ? this.eventsWithZones = true : this.eventsWithZones = false
  }

  addZones(){
    this.allZones.push(this.modelZones)
    console.log(this.allZones)
  }

  removeZone(zoneKey: number){
    this.allZones.splice(zoneKey,1)
  }


  onSubmit(registroEvento: NgForm, event: any): void {
      this.creatingEvent = true     
  }
}
