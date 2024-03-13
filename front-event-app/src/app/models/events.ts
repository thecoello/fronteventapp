import { Zones } from "./zones"

export class Event {
    id?: number
    image?: string
    nombreEvento?: string
    tipoEvento?: string
    descripcion?: string
    fechaInicio?: string
    horaIncio?:string
    fechaFinal?: string
    horaFinal?: string
    enlaceStreaming?: string
    capacidadEvento?: number
    direccion?: string
    zonas?: Array<Zones>
    imageMapaZona?: string
}

