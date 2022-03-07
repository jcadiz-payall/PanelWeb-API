import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Aliado_Comercial } from './aliado_comercial.schema';

export type MovimientosDocument = Movimientos & Document;

@Schema()
export class Movimientos {

    @Prop()
    _id: mongoose.Schema.Types.ObjectId;

    @Prop()
    numero_mvto: string;

    @Prop()
    tipo_mvto: string;

    @Prop()
    monto_mvto: number;

    @Prop()
    status_mvto: string;

    @Prop()
    voucher_mvto: string;

    @Prop()
    disponible_mvto: number;

    @Prop()
    fechaRegistro_mvto: Date;

    @Prop()
    fechaOperacion_mvto: Date;

    @Prop()
    update: [mongoose.Schema.Types.Mixed];

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId , ref: 'Aliado_Comercial' }] })
    aliadoComercial_mvto: Aliado_Comercial[];
    //aliadoComercial_mvto: [mongoose.Schema.Types.Mixed];

    @Prop()
    cuenta_mvto: [mongoose.Schema.Types.Mixed];

    @Prop()
    banco_mvto: [mongoose.Schema.Types.Mixed];

    @Prop()
    usuario: [mongoose.Schema.Types.Mixed];

    @Prop()
    banco_movimiento: number;

    @Prop()
    c2p: [mongoose.Schema.Types.Mixed];

    @Prop()
    fechaConciliacion_mvto: Date;

};

    //{ collection : 'movimientos' }


//export const MovimientosSchema = SchemaFactory.createForClass(Movimientos);
//export const Aliado_comercialSchema = SchemaFactory.createForClass(Aliado_Comercial);


export const MovimientosSchema = SchemaFactory.createForClass(Movimientos);
//module.exports = Movimientos;

// const Aliado_Comercial = mongoose.model('Aliado_Comercial', Aliado_comercialSchema);