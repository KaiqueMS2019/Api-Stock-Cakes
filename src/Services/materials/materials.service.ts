import { Injectable } from '@nestjs/common';
import { MaterialDTO } from 'src/DTO/materials.dto';
import { Material } from 'src/Mongo/Interfaces/material.interface';
import { MaterialRepository } from 'src/Mongo/Repository/material.repository';

@Injectable()
export class MaterialsService {

    constructor(
        private readonly materialRepository : MaterialRepository
    ){}

    async saveMaterial(newMaterial: MaterialDTO): Promise<Material>{
        return await this.materialRepository.saveMaterial(newMaterial);
    }
}
