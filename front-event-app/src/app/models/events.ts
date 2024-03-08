import { Zones } from "./zones"

export class Event {
    image?: String
    nombreEvento?: String
    tipoEvento?: String
    descripcion?: String
    fechaInicio?: String
    horeIncio?:String
    fechaFinal?: String
    horeFinal?: String
    enlaceStreaming?: String
    capacidadEvento?: Number
    direccion?: String
    zonas?: Array<Zones>
    imageMapaZona?: String
}

