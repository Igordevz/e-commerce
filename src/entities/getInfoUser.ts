import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { UserModel } from "../models/users/user";
export async function GetInfoUser(req: Request, res:Response) {

    const { token } = req.body
    
    const user = await UserModel.findOne({ token: token })

    if(user){
        return res.status(200).json(user)
    }
    if(!user){
        return res.status(200).json({ msg: 'User not found' })

    }

}