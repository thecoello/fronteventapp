import { Zones } from "./zones"

export class Event {
    id?: number
    userAdminId?: number
    nombre?: string
    image?: string
    tipoEvento?: string
    descripcion?: string
    fechaInicio?: string
    fechaFinal?: string
    enlaceStreaming?: string
    capacidadEvento?: number
    direccion?: string
    imageMapaZona?: string
    zonas?: Array<Zones>
}

