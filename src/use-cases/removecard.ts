import { Request, Response } from "express";
import { CardapioModel } from "../models/cardapio/cardapio";
import { UserModel } from "../models/users/user";

export async function RemoveCart(req: Request, res: Response){

    const { token } = req.body;
    const ClearCart = { 
        carrinho: [
           {
            msg: "seu carrinho esta vazio"
           }
        ]
    }
    const getCart = await UserModel.updateOne({ token: token }, ClearCart)
    const user = await UserModel.findOne({ token: token });

    return res.status(200).json({ user })


}