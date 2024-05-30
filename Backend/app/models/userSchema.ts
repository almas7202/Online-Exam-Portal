                                import mongoose, { Schema } from "mongoose";
import joi, { boolean } from 'joi'


const userSchema = new Schema({
    userName:{
        type:String,
        require: true,
        trim:true,
        unique:true
    },
    userEmail:{
        type:String,
        require:true,
        lowercase:true,
        unique:true,
        trim:true
    },
    userPassword:{
        type:String,
        require:true,
        min: [8,'Must be at least 8']
    },
    userRole:{
        type:String,
        enum:['student','professor'],
        require:true
    }
})

export default mongoose.model('user',userSchema)

export const userValidation = joi.object({
    userName:joi.string().min(5).required(),
    userEmail:joi.string().required().email(),
    userPassword:joi.string().min(8).required(),
    userRole:joi.string().required().valid('student','professor')
})
