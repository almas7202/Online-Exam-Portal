import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const subjectSchema = new Schema({
    subjectName:{
        type:String,
        require:true,
        unique:true,
        lowercase:true
    }
})

export default mongoose.model('subject',subjectSchema)

export const subjectValidation =Joi.object({
    subjectName:Joi.string().required()
})