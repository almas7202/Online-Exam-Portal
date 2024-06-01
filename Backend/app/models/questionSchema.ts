import { text } from "body-parser";
import Joi from "joi";
import joi from "joi"
import mongoose, { Schema } from "mongoose";


const questionschema = new Schema({
    subject_id:{
        type:Schema.Types.ObjectId,
        ref:'subject',
        validate:{
            validator:async function (subject_id:any):Promise<boolean> {
                const subject = await mongoose.models.subject.findOne({_id:subject_id})
                return !!subject
            },
            message:'Subject of this ID Does not exist'
        }
    },
    question:{
        type:String,
        require : true
    },
    options: {
        type: [{
            type: { type: Boolean, required: true },
            text: { type: String, required: true }
        }],
        validate: {
            validator: function (value: any) {
                return value && value.length === 4;
            },
            message: 'Answer options should be 4'
        },
        required: true
    },    
    answer:{
        type:Number,
        require:true,
    }
})

export default mongoose.model('question',questionschema)


export const questionValidation = Joi.object({
    subject_id: Joi.string().required(),
    question: Joi.string().required(),
    options: Joi.array().items(Joi.object({
        type: Joi.boolean().required(),
        text: Joi.string().required()
    })).length(4).required().messages({
        'array.base': 'Options must be an array',
        'array.length': 'Exactly 4 options are required',
        'any.required': 'Options are required',
        'object.base': 'Each option must be an object',
        'string.base': 'Option text must be a string',
        'boolean.base': 'Option type must be a boolean',
    }),
    answer: Joi.number().required().min(1).max(4).message("Enter value Between 1 to 4")
});



  