import passport from 'passport';
import { userValidation } from "../models/userSchema";
import userModel from "../models/userSchema";
import {Request,Response } from "express";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import joi from 'joi'
import Joi from 'joi';
export const createUser = async(req:Request,res:Response) =>{
    const {error} = userValidation.validate(req.body)
    
    if (error) return res.send(error.details[0].message)

    let {userName,userEmail,userPassword,userRole} = req.body

    let user = await userModel.findOne({userEmail : userEmail})
    if(user){
        return res.status(403).send('user Already Register')
    }else{
        const salt = await bcrypt.genSalt(10)
        userPassword = await bcrypt.hash(userPassword,salt)
        user = await userModel.create({
            userName,
            userEmail,
            userPassword,
            userRole
        })
        return res.status(200).send('User Succesfully Register' + JSON.stringify(user))
    }
}

export const userLogin = async (req: Request, res: Response) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    let user = await userModel.findOne({ userName: req.body.userName });
    if (!user) {
        return res.status(400).send('Email or password incorrect');
    }

    if (!user.userPassword) {
        return res.status(400).send('User password not set');
    }

    const validPassword = await bcrypt.compare(req.body.userPassword, user.userPassword );
    console.log(validPassword);
    
    if (!validPassword) {
        return res.status(400).send('Email or password incorrect');
    }
    const token = jwt.sign({ _id: user._id,userRole:user.userRole}, 'jwtPrivateKey', { algorithm: "HS256" });
    res.status(200).header('x-auth-token', token).send(token)
   
};

function validate(req:Request){
    const uservalidate = Joi.object({
        userName:Joi.string().required(),
        userPassword:Joi.string().required().min(8).max(16)
    })
    return uservalidate.validate(req)
}