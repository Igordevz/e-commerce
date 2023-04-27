import { Request, Response } from "express";
import { UserModel } from "../models/users/user";
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';
export  async function CreateUser(req: Request, res: Response){

    const { name, email, password, confirmPassword  } = req.body

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)
    const NewUser = new UserModel({
        name, 
        email,
        password: passwordHash,
        confirmPassword:passwordHash,
        token: uuidv4(), 
    })
    if(name == ''){
        return res.status(401).json({ msg: 'fill in the name field' });
    }
    if(email.length < 4 ){
        return res.status(401).json({ msg: 'fill in the email field' });
        
    }
    if(password.length < 6){
        return res.status(401).json({ msg: 'put at least 6 digits in the password' })
        
    }
    if(confirmPassword != password ){
        return res.status(401).json({ msg: 'passwords are not the same' })
    }

    // compare user Mongodb

    const userExist = await UserModel.findOne({ email: email })

    if(userExist){
         res.status(401).json({ msg: 'User Exist' })
         return;
    }

    try {
        const AddUser = await UserModel.create(NewUser)
        return res.status(201).json(AddUser);
    } 
    catch (error) {
        return res.status(404).json({error});
    }


} 