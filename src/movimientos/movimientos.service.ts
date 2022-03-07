import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListadoCompras } from './interfaces/listadoCompras.interface';
import { Movimientos } from './interfaces/movimientos.interface';

@Injectable()
export class MovimientosService {

    constructor(@InjectModel('Movimientos') private readonly movimientosModel: Model<Movimientos>){}

    async getMovimientos(): Promise<Movimientos[]>{
        const movimientos = await this.movimientosModel.find().limit(10);
        return movimientos;
    }

    async getAliados_Comerciales(): Promise<any[]>{
        const movimientos = await this.movimientosModel.find().limit(10);
        return movimientos;
    }

    async listadoCompras():Promise<any[]>{
        const listado = await this.movimientosModel.find({
            tipo_mvto: "compra"
        })//.select({
        //     fechaRegistro_mvto: 1,
        //     banco_mvto: 1,
        //     voucher_mvto: 1,
        //     monto_mvto: 1,
        //     aliadoComercial_mvto: 1
        // })
        // .populate({ path: 'aliadoComercial_mvto', select: ['nombreAC'] })
        .limit(2);

        //console.log(listado);
        return listado;
    }
}
