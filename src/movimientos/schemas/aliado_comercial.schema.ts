import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type AliadoComercialDocument = Aliado_Comercial & Document;

@Schema()
export class Aliado_Comercial {

    @Prop()
    _id: mongoose.Schema.Types.ObjectId;

    @Prop()
    actividad_economica: [mongoose.Schema.Types.Mixed];

    @Prop()
    activo: boolean;

    @Prop()
    cargo: string;

    @Prop()
    comision_publicidad: string;

    @Prop()
    contactos: [mongoose.Schema.Types.Mixed];

    @Prop()
    correo_electronica: string;

    @Prop()
    correo_representante: string;

    @Prop()
    cupo: string;
    
    @Prop()
    cupo_minimo: string;

    @Prop()
    domicilio_fiscal: string;

    @Prop()
    duracion: string;

    @Prop()
    fecha_inicio: string;

    @Prop()
    fee_publicidad: string;

    @Prop()
    nombreAC: string;

    @Prop()
    observaciones: string;

    @Prop()
    periodo_prueba: string;

    @Prop()
    plus_recarga: number;

    @Prop()
    ppvv: [mongoose.Schema.Types.Mixed];

    @Prop()
    prepago: string;
    
    @Prop()
    representante_legal: string;

    @Prop()
    rif: string;

    @Prop()
    saldo: [mongoose.Schema.Types.Mixed]

    @Prop()
    saldo_actual: string;

    @Prop()
    telefonos: string;

    @Prop()
    telf_representante: string;

    @Prop()
    punto_comercial: [mongoose.Schema.Types.Mixed];

    @Prop()
    punto_venta: [mongoose.Schema.Types.Mixed];

    @Prop()
    telefono: string;

    @Prop()
    esDristribuidor: boolean;

    @Prop()
    razon_social: string;
    
    @Prop()
    direccion: string;

    @Prop()
    vendedor: [mongoose.Schema.Types.Mixed];

    @Prop()
    usuarios: [mongoose.Schema.Types.Mixed];

    @Prop()
    email: string;

    @Prop()
    ultima_recarga:[mongoose.Schema.Types.Mixed]

    @Prop()
    asignar_maquina: boolean;

    @Prop()
    credito: [mongoose.Schema.Types.Mixed]

    @Prop()
    privilegios:[mongoose.Schema.Types.Mixed];

    @Prop()
    compras_conciliadas: number;

};

export const Aliado_ComercialSchema = SchemaFactory.createForClass(Aliado_Comercial);
//module.exports = Aliado_Comercial;