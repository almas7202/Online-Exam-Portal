import mongoose from 'mongoose'
import SubjectModel,{subjectValidation} from '../models/subjectSchema'
import { Request,Response } from 'express'
import Joi from 'joi'

export const createSubject = async(req:Request,res:Response) =>{
    const {error} = subjectValidation.validate(req.body)

    if (error) return res.send(error.details[0].message)

    const {subjectName} = req.body

    let subject = await SubjectModel.findOne({subjectName : subjectName})
    if(subject){
        return res.status(403).send('subject is Already there')
    }else{
        SubjectModel.create({
            subjectName
        })
        res.status(200).send('Succesfully Subject Added')
    }
}


export const updateSubject = async(req:Request,res:Response) =>{
    const id = req.params.id
    const {error} = subjectValidation.validate(req.body)

    if (error) return res.send(error.details[0].message)
    
    let subject = await SubjectModel.updateOne({_id : id},{
        $set:{
            subjectName: req.body.subjectName
        }
    })
   if(subject.acknowledged){
    res.status(200).send("update Succesfully")
   }else{
    res.status(404).send('Subject Not Found ')
   }
}

export const deleteSubject = async(req:Request,res:Response) =>{
    const id = req.params.id
    
    const subject = await SubjectModel.deleteOne({_id:id})
    if(subject.acknowledged){
        res.status(200).send('subject Remove Succesfully')
    }else{
        res.status(404).send('subject not founf')
    }
}

export const getSubject = async(req:Request,res:Response) =>{
    const subjects = await SubjectModel.find().select({_id:0})
    res.send(JSON.stringify(subjects))
}