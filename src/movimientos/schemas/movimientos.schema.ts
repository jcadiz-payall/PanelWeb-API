import mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const MovimientosSchema = new Schema({

    _id: Schema.Types.ObjectId,

    numero_mvto: String,

    tipo_mvto: String,

    monto_mvto: Number,

    status_mvto: String,

    voucher_mvto: String,

    disponible_mvto: Number,

    fechaRegistro_mvto: Date,

    fechaOperacion_mvto: Date,

    update: [Schema.Types.Mixed],

    aliadoComercial_mvto: [{ type: Schema.Types.ObjectId, ref: 'aliado_comercial' }],

    cuenta_mvto: [Schema.Types.Mixed],

    banco_mvto: [Schema.Types.Mixed],

    usuario: [Schema.Types.Mixed],

    banco_movimiento: Number,

    c2p: { 
        nacionalidad: String, 
        banco: String 
    },

    fechaConciliacion_mvto: Date,

    }, 

    { collection : 'movimientos' }
);

//export const MovimientosSchema = SchemaFactory.createForClass(Movimientos);
//export const Aliado_comercialSchema = SchemaFactory.createForClass(Aliado_Comercial);


const Movimientos = mongoose.model('Movimiento', MovimientosSchema);
//module.exports = Movimientos;

// const Aliado_Comercial = mongoose.model('Aliado_Comercial', Aliado_comercialSchema);