import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/events';
import { Zones } from 'src/app/models/zones';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-creacionevento',
  templateUrl: './creacionevento.component.html',
  styleUrls: ['./creacionevento.component.scss']
})
export class CreacioneventoComponent implements OnInit {

  modelEvento: Event = new Event()
  allZones: Array<Zones> = []

  creatingEvent: boolean = false
  registerEventOk?: string
  registerEventKo?: string
  inputsValidate?: boolean = false
  eventsWithZones: boolean = false
  eventOnline: boolean = false
  imageFile?: any = null
  imageMapaZonaFile?: any = null

  constructor(private eventService: EventService, private router: Router) { }
  ngOnInit(): void {
    this.modelEvento.tipoEvento = ""
  }

  eventOnlineCheck(event: any){
    event.target.value == "online" ? this.eventOnline = true : this.eventOnline = false
  }

  eventZones(event: any){
    !this.eventsWithZones ? this.eventsWithZones = true : this.eventsWithZones = false
    if(!this.eventsWithZones){
      this.allZones = []
    }
  }

  addZones(){
    this.allZones.push(new Zones())
  }

  removeZone(zoneKey: number){
    this.allZones.splice(zoneKey,1)
  }

  onSubmit(registroEvento: NgForm, event: any): void {
      this.creatingEvent = true     
      const formData = new FormData()

      formData.append('userAdminId', '1')
      formData.append('nombre',JSON.stringify(this.modelEvento.nombre).replaceAll('"',""))
      formData.append('image', this.imageFile != null ? this.imageFile.target.files[0] : this.imageFile)
      formData.append('tipoEvento',JSON.stringify(this.modelEvento.tipoEvento).replaceAll('"',""))
      formData.append('descripcion',JSON.stringify(this.modelEvento.descripcion).replaceAll('"',""))
      formData.append('fechaInicio',registroEvento.value.fechaInicio)
      formData.append('fechaFinal',registroEvento.value.fechaFinal)
      formData.append('enlaceStreaming',JSON.stringify(this.modelEvento.enlaceStreaming).replaceAll('"',""))
      formData.append('capacidadEvento', this.modelEvento.capacidadEvento ? JSON.stringify(this.modelEvento.capacidadEvento).replaceAll('"',""): "")
      formData.append('direccion',JSON.stringify(this.modelEvento.direccion).replaceAll('"',""))
      formData.append('imageMapaZona',this.imageMapaZonaFile != null ? this.imageMapaZonaFile.target.files[0]  : this.imageMapaZonaFile)

  
      if(this.allZones.length == 0 && this.eventsWithZones){
        alert("Debes añadir zonas")
      }else{
        if(this.allZones.length > 0 && this.eventsWithZones){
          const zonas = JSON.stringify({zonas:this.allZones})
          console.log(zonas.toString())
          formData.append("zonas",zonas.toString())
          formData.delete("capacidadEvento")
        }
      }

      this.eventService.createEvent(formData).subscribe((response)=>{
        console.log(response)
      })
  }
}
