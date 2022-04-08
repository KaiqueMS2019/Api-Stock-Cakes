import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
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
   async getAllMaterials(): Promise<Material[]>{
       return await this.materialService.getAllMaterials();
   }

   @Get(':name/:materialName')
   async getMaterialByName(@Param('materialName') materialName: string): Promise<Material[]>{
       return await this.materialService.getMaterialByName(materialName);
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
