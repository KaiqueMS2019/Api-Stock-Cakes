import { Injectable } from "@nestjs/common";
import { MaterialDTO } from "src/DTO/materials.dto";
import { InjectModel } from '@nestjs/mongoose';
import { Material } from '../Interfaces/material.interface';
import { Model } from 'mongoose';

@Injectable()
export class MaterialRepository {

    constructor(
        @InjectModel('material') private readonly materialModel : Model<Material>
    ){}

   async saveMaterial(newMaterial: MaterialDTO): Promise<Material>{
        const savedMaterial = new this.materialModel(newMaterial)
        return await savedMaterial.save()
    }

    async getAllMaterials(): Promise<Material[]>{
        return await this.materialModel.find({}, {__v : false}).sort({ name : +1}).exec();
    }

    async getMaterialByName(materialName: string): Promise<Material[]>{

        return await this.materialModel.find({
            name: { '$regex' : materialName, '$options' : 'i'}
        }, {__v : false }
        )

    }

}