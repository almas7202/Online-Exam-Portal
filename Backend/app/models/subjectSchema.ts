import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const subjectSchema = new Schema({
    subjectName:{
        type:String,
        require:true,
        unique:true,
        enum:['Node.js','Python','SQL','.NET','Devops','Java']
    }
})

export default mongoose.model('subject',subjectSchema)

export const subjectValidation =Joi.object({
    subjectName:Joi.string().required().valid('Node.js','Python','SQL','.NET','Devops','Java')
})