import { Request, Response } from "express";
import { CardapioModel } from "../models/cardapio/cardapio";

export default async function Filter(req:Request, res:Response){

    const { typeFilter } = req.body
    const filter = await CardapioModel.find({cartegory: typeFilter})
    
    return res.status(200).json(filter);
}