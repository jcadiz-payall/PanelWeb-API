import { Document } from "mongoose";

export interface Movimientos extends Document{
    readonly _id?: any;
    readonly numero_mvto: string;
    readonly tipo_mvto: string;
    readonly monto_mvto: number;
    readonly status_mvto: string;
    readonly voucher_mvto: string;
    readonly disponible_mvto: number;
    readonly fechaRegistro_mvto: Date;
    readonly fechaOperacion_mvto: Date;
    readonly aliadoComercial_mvto: any;
    readonly update: any;
    readonly cuenta_mvto: any;
    readonly banco_mvto: any;
    readonly usuario: any;
    readonly banco_movimiento: number;
    readonly c2p: { 
        nacionalidad: string,
        banco: string 
    };
    readonly fechaConciliacion_mvto: Date;
}