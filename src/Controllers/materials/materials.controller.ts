import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { get } from 'http';
import { Material } from 'src/Mongo/Interfaces/material.interface';
import { MaterialsService } from 'src/Services/materials/materials.service';
import {MaterialDTO} from '../../DTO/materials.dto';

@Controller('materials')
export class MaterialsController {

    constructor(
        private readonly materialService : MaterialsService
    ){}

   @Get()
   getAllMaterials(): string{
       return 'Todos os Materiais estão aqui!';
   }

   @Post()
   async saveMaterial(@Body() newMaterial: MaterialDTO): Promise<Material>{
       return await this.materialService.saveMaterial(newMaterial);
   }

   @Patch()
   updateMaterial(): string{
       return "Esse material foi atualizado"
   }

   @Delete()
   deleteMaterial(): string{
       return "Deletado"
   }
    
}
