import { Zones } from "./zones"

export class Event {
    id?: number
    userAdminId?: number
    nombre?: string
    image?: string
    tipoEvento?: string
    descripcion?: string | null
    fechaInicio?: string
    fechaFinal?: string
    enlaceStreaming?: string | null
    capacidadEvento?: number | null
    direccion?: string | null
    imageMapaZona?: string | null
    zonas?: Array<Zones> | null
}

