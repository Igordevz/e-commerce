import { Request, Response } from "express";
import { UserModel } from "../models/users/user";
import bcrypt from 'bcrypt'
export async function LoginUser(req:Request, res:Response){

    const { email, password } = req.body
    try {
        const passwordhash:any = await UserModel.findOne({ email: email})
        const passChecked = await bcrypt.compare(password, passwordhash?.password)
        if(passChecked){
            return res.status(200).json(passwordhash);
        }
    } catch (error) {
        return res.status(200).json({ msg: 'user not found' });
    }
    return res.status(200).json({ msg: 'user not found' });

} 