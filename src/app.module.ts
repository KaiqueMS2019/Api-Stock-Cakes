import { Module } from '@nestjs/common';
import { MaterialsController } from './Controllers/materials/materials.controller';
import { MongooseModule} from '@nestjs/mongoose'
import { MaterialsService } from './Services/materials/materials.service';
import { MaterialRepository } from './Mongo/Repository/material.repository';
import { MaterialSchema } from './Mongo/Schemas/material.schema';


@Module({
  imports: [ 

    MongooseModule.forRoot('mongodb://localhost/stock', { useNewUrlParser : true, useUnifiedTopology: true}),

    MongooseModule.forFeature([
      { name : 'material', schema : MaterialSchema }
    ])

  ],
  controllers: [MaterialsController],
  providers: [MaterialsService, MaterialRepository],
})
export class AppModule {}
