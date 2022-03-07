import mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const Aliado_comercialSchema = new Schema({

    _id: Schema.Types.ObjectId,

    actividad_economica: [Schema.Types.Mixed],

    activo: Boolean,

    cargo: String,

    comision_publicidad: String,

    contactos: [Schema.Types.Mixed],

    correo_electronica: String,

    correo_representante: String,

    cupo: String,
    
    cupo_minimo: String,

    domicilio_fiscal: String,

    duracion: String,

    fecha_inicio: String,

    fee_publicidad: String,

    nombreAC: String,

    observaciones: String,

    periodo_prueba: String,

    plus_recarga: Number,

    ppvv: [Schema.Types.Mixed],

    prepago: String,

    representante_legal: String,

    rif: String,

    saldo: {
        actual: Number,
        base: Number,
        maximo: Number,
        minimo: Number,
        nuevo: Number,
        disponible: Number,
        diferido: Number,
        anticipo: Number,
        real: Number,
    },

    saldo_actual: String,

    telefonos: String,

    telf_representante: String,

    punto_comercial: [Schema.Types.Mixed],

    punto_venta: [Schema.Types.Mixed],

    telefono: String,

    esDristribuidor: Boolean,

    razon_social: String,
    
    direccion: String,

    vendedor: [Schema.Types.Mixed],

    usuarios: [Schema.Types.Mixed],

    email: String,

    ultima_recarga: {
        codigo_repuesta: String,
        codigo_aprobacion: String,
        numeroServicio_mvto: String,
        monto: Number,
        monto_neto: Number,
        status: String,
        fecha_mvto: Date,
    },

    asignar_maquina: Boolean,

    credito: {
        activo: Boolean,
        monto: Number,
        tiempo: Number,
        contadorSobregiros: Number,
        sobregirado: Boolean,
        fecha: Date,
    },

    privilegios:[Schema.Types.Mixed],

    compras_conciliadas: Number

    },
    { collection : 'aliado_comercial'}
);

const Aliado_Comercial = mongoose.model('Aliado_Comercial', Aliado_comercialSchema);
//module.exports = Aliado_Comercial;