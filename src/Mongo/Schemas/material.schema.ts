import { Schema } from 'mongoose';


export const MaterialSchema = new Schema({

    name : String,
    quantity: Number,
    user: String

})