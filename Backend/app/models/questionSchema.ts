import { text } from "body-parser";
import { options } from "joi";
import mongoose, { Schema } from "mongoose";

const questionschema = new Schema({
    subject:{
        type:Schema.Types.ObjectId,
        ref:'subject'
    },
    text:{
        type:String,
        require : true
    },
    options :[
        {
          type:Boolean,
          text:String,
          require:true
        }
    ]
})

export default mongoose.model('question',questionschema)