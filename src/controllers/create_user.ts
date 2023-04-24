import { Request, Response } from "express";
import { UserModel } from "../models/users/user";

export default async function CreateUser(req: Request, res: Response){

    const { name, password, confirmPassword  } = req.body

    const NewUser = new UserModel({
        name, 
        password,
        confirmPassword
    })
    if(name == ''){
        return res.status(401).json({ msg: 'fill in the name field' });
    }
    if(confirmPassword != password ){
        return res.status(401).json({ msg: 'passwords are not the same' })
    }


} 