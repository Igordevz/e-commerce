import { Request, Response } from "express";

export default async function CreateUser(req: Request, res: Response){

    res.status(200).send('testando')
    

} 