import { BadRequestException, Injectable } from '@nestjs/common';
import mongoose from 'mongoose';
import { MaterialDTO } from 'src/DTO/materials.dto';
import { Material } from 'src/Mongo/Interfaces/material.interface';
import { MaterialRepository } from 'src/Mongo/Repository/material.repository';

@Injectable()
export class MaterialsService {

    constructor(
        private readonly materialRepository : MaterialRepository
    ){}

    async getAllMaterials(): Promise<Material[]>{
        const allMaterials = await this.materialRepository.getAllMaterials();
        
        if(!allMaterials.length)
            throw new BadRequestException('Não há materiais cadastrados')

        return allMaterials;
    }

    async saveMaterial(newMaterial: MaterialDTO): Promise<Material>{
        return await this.materialRepository.saveMaterial(newMaterial);
    }

    async getMaterialById(materialID: string): Promise<Material>{
        try {
            const existBook = await this.materialRepository.getMaterialById(materialID);
    
            if(!existBook)
                throw new BadRequestException('Material não encontrado');
            
            return existBook;

        } catch (error) {
            throw new BadRequestException('Sem resultados');
        }
    }

    async getMaterialByName(materialName: string): Promise<Material[]>{

        const foundMaterials = await this.materialRepository.getMaterialByName(materialName);

        if(!foundMaterials.length)
            throw new BadRequestException('Sem resultados de Materiais')
        
        return foundMaterials;
    }

    async getUserbyName(userName: string): Promise<Material[]>{

        const foundMaterials = await this.materialRepository.getUserbyName(userName);

        if(!foundMaterials.length)
            throw new BadRequestException('Esse usuario não existe')
        
        return foundMaterials;
    }

    async updateMaterialById(materialID: string, newMaterial: MaterialDTO): Promise<Material>{

        const existMaterial = await this.materialRepository.getMaterialById(materialID);

        if(!existMaterial)
            throw new BadRequestException('Resultado não encontrado');

        return await  this.materialRepository.updateMaterialById(materialID, newMaterial);

    }

}
