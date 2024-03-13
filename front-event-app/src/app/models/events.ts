import { Zones } from "./zones"

export class Event {
    id?: number
    idUser?: number
    nombre?: string
    image?: string
    tipoEvento?: string
    descripcion?: string
    fechaInicio?: string
    horaIncio?:string
    fechaFinal?: string
    horaFinal?: string
    enlaceStreaming?: string
    capacidadEvento?: number
    direccion?: string
    imageMapaZona?: string
    zonas?: Array<Zones>
}

