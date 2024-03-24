import { Zones } from "./zones"

export class Event {
    id?: number
    userAdminId?: number
    nombre?: string
    tipoEvento?: string
    descripcion?: string
    fechaInicio?: string
    fechaFinal?: string
    enlaceStreaming?: string
    capacidadEvento?: number | null
    direccion?: string 
    zonas?: Array<Zones>
}

