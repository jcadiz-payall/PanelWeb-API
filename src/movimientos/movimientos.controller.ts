import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { MovimientosService } from './movimientos.service';

@Controller('movimientos')
export class MovimientosController {

    constructor(private movimientosService: MovimientosService){}

    @Get('/')
    async getMovimientos(@Res() res){
        const movimientos = await this.movimientosService.getMovimientos();
        return res.status(HttpStatus.OK).json({
            message: 'Movimientos List',
            movimientos
        });
    }
    @Get('/aliadoComercial')
    async getAliados_Comercial(@Res() res){
        const aliados = await this.movimientosService.getAliados_Comerciales();
        return res.status(HttpStatus.OK).json({
            message: 'Aliados List',
            aliados
        });
    }

    @Get('/listarCompras')
    async listarCompras(@Res() res){
        const listado = await this.movimientosService.listadoCompras();
        return res.status(HttpStatus.OK).json({
            message: 'Listado de Compras Seccion Administracion',
            listado
        })
    }
}
