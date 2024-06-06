import { Request,Response,NextFunction } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'

const userAuth = async(req:Request,res:Response,next:NextFunction) =>{
    const token = req.headers.authorization

    if(!token) return res.status(401).send('unAuthorization')

    jwt.verify(token,'jwtPrivateKey',function(err,decoded){
        if(err){
            res.status(401).send('unAuthorization')
        }else{
           next()
        }
    })
}

export default userAuth
