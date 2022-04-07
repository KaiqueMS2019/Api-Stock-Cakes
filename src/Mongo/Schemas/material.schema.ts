import { Schema } from 'mongoose';
import { UserSchema} from './user.schema';

export const MaterialSchema = new Schema({

    name : String,
    quantity: Number,
    user: String

})