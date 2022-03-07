import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListadoCompras } from './interfaces/listadoCompras.interface';
import { Movimientos } from './interfaces/movimientos.interface';
import { Aliado_ComercialSchema } from './schemas/aliado_comercial.schema';

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
        // const listado = await this.movimientosModel.find({
        //     tipo_mvto: "compra",
        //     _id: "61c479e32b1d6d0d538b456f"
        // }).select({
        //     fechaRegistro_mvto: 1,
        //     banco_mvto: 1,
        //     voucher_mvto: 1,
        //     monto_mvto: 1,
        //     aliadoComercial_mvto: 1
        // })
        // .populate({ path: 'aliadoComercial_mvto', select:'nombreAC'}).exec();

        const listado = await this.movimientosModel.aggregate([
            // {
            //     $limit: 10
            // }, {
                {
                $project: {
                    tipo_mvto: 1,
                    fechaRegistro_mvto: 1,
                    status_mvto: 1,
                    monto_mvto: 1,
                    voucher_mvto: 1,
                    aliadoComercial_mvto: {
                        $arrayElemAt: [{
                            $objectToArray: "$aliadoComercial_mvto"
                        }, -1]
                    },
                    banco_mvto: {
                        $arrayElemAt: [{
                            $objectToArray: "$banco_mvto"
                        }, -1]
                    }
                }
                }, {
                    $lookup: {
                        from: 'aliado_comercial',
                        localField: 'aliadoComercial_mvto.v',
                        foreignField: '_id',
                        as: 'aliadoInfo'
                    }
                },
                {
                    $lookup: {
                        from: 'bancos',
                        localField: 'banco_mvto.v',
                        foreignField: '_id',
                        as: 'bancoInfo'
                    }
                },
                
            {
                $unwind: {
                    path: "$aliadoInfo"
                }
            }, 
            {
                $unwind: {
                    path: "$bancoInfo"
                }
            }, 
            {
                $project: {
                    tipo_mvto: 1,
                    fechaRegistro_mvto: 1,
                    status_mvto: 1,
                    monto_mvto: 1,
                    voucher_mvto: 1,
                    nombreAliado: "$aliadoInfo.nombreAC",
                    nombreBanco: "$bancoInfo.nombre"
                }
            },
            {
                $match:{
                    status_mvto: 'C',
                    tipo_mvto: "compra"
                }
            }
        ]).limit(5);
    
        
        return listado;
    }
}
