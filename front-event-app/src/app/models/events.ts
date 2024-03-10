import { Zones } from "./zones"

export class Event {
    image?: string
    nombreEvento?: string
    tipoEvento?: string
    descripcion?: string
    fechaInicio?: string
    horeIncio?:string
    fechaFinal?: string
    horeFinal?: string
    enlaceStreaming?: string
    capacidadEvento?: number
    direccion?: string
    zonas?: Array<Zones>
    imageMapaZona?: string
}

