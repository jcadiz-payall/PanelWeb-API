import { Document } from "mongoose";

export interface ListadoCompras extends Document{
    readonly monto_mvto: number;
    readonly status_mvto: string;
    readonly voucher_mvto: string;
    readonly fechaRegistro_mvto: Date;
    readonly aliadoComercial_mvto: any;
    readonly banco_mvto: any;
}