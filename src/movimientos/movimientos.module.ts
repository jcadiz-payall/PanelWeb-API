import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MovimientosController } from './movimientos.controller';
import { MovimientosService } from './movimientos.service';
import { MovimientosSchema } from './schemas/movimientos.schema';
import { Aliado_comercialSchema } from './schemas/aliado_comercial.schema';

@Module({
    imports: [MovimientosModule,
        MongooseModule.forFeature([
            { name: 'Movimientos', schema: MovimientosSchema},
            { name: 'Aliado_Comercial', schema: Aliado_comercialSchema}
        ])
    ],
    controllers: [MovimientosController],
    providers: [MovimientosService]
})
export class MovimientosModule {}
