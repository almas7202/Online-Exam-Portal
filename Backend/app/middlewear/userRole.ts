import { Request,Response,NextFunction } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'

const userRole = async(req:Request,res:Response,next:NextFunction) =>{
    const token = req.headers.authorization

    if(!token) return res.status(401).send('unAuthroization')

    jwt.verify(token,'jwtPrivateKey',function(err,decoded){
        if(err){
            return res.status(401).send('unAuthroization')
        }else{
            const decodedjwt = decoded as JwtPayload
            if(decodedjwt.userRole == "professor"){
                next()
            }else{
                return res.status(401).send('unAuthroization')
            }
        }
    })
}
export default userRole