import questionModel,{questionValidation} from "../models/questionSchema";
import { Request,Response } from "express";

export const questionCreate = async(req:Request,res:Response) =>{
    const {error} = questionValidation.validate(req.body)

    if(error) return res.status(403).send(error.details[0].message)

    const {subject_id,question,options,answer} = req.body

    let questions = await questionModel.findOne({question : question})
    if(questions){
        return res.status(403).send('Question already there')
    }else{
        questionModel.create({
            subject_id,
            question,
            options,
            answer
        })
        res.status(200).send('Question Added Succesfully')
    }
}
