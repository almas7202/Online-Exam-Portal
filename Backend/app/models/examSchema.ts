import { ref } from "joi";
import mongoose, { ObjectId, Schema } from "mongoose";
import joi from "joi";

const examSchema = new Schema({
    subject:{
        type:Schema.Types.ObjectId,
        ref:'subject',
        require:true
    },
    questions:[{
        type:Schema.Types.ObjectId,
        ref:'question',
        require:true
    }],
    timelimit:{
        type:Number,
        require:true,
    },
    createdProfessor:{
        type:Schema.Types.ObjectId,
        ref:'user',
        require:true,
        validate:{
            validator:async function (user_id:ObjectId) {
                const user = await mongoose.models.user.findOne({ _id: user_id })
                return !!user
            },
            message:'Professor with this id does not exist'
        }
    },
    AssignStudents:[{
        type:Schema.Types.ObjectId,
        ref:'user',
        require:true,
        validate: {
            validator: async function(value) {
              // Validate each assigned student ID
              const users = await mongoose.models['user'].countDocuments({_id: {$in: value}});
              return users === value.length; // Returns true if all IDs are valid users
            },
            message: 'One or more invalid user IDs'
          }
    }]
})


export default mongoose.model('exam',examSchema)

export const examValidation = joi.object({
    subject:joi.string().required(),
    question:joi.array().items(joi.string().required()).min(1).required(),
    timelimit:joi.number().required(),
    createdProfessor: joi.string()
        .pattern(new RegExp('^[0-9a-fA-F]{24}$')) // Validate ObjectId format
        .required()
        .custom(async (value, helpers) => {
            const user = await mongoose.models.user.findOne({ _id: value });
            if (!user) {
                return helpers.error('any.invalid');            }
            return value;
        }),
    AssignStudents: joi.array().items(joi.string().required()).min(1).required()
});

