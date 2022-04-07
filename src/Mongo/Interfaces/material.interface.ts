import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface Material extends Document {

    readonly _id : mongoose.Schema.Types.ObjectId,
    readonly name : string,
    readonly quantity: number,
    readonly user : string

}