import { Request, Response } from "express";
import { UserModel } from "../models/users/user";
import { CardapioModel } from "../models/cardapio/cardapio";

export async function CartItem(req:Request, res:Response) {
    
  const { token, itemId } = req.body;

  try {
    const user = await UserModel.findOne({ token: token });
    const getProduct = await CardapioModel.findOne({ _id: itemId });
  
    // Verificar se o array "carrinho" existe no documento do usuário
    if (!user?.carrinho) {
      // Se o array não existir, criar um novo array e adicionar o item
      const addCart = {
        carrinho: [getProduct]
      };
      const addUserCart = await UserModel.updateOne({ token: token }, addCart);
      return res.status(200).json({ addUserCart });
    } else {
      // Se o array existir, adicionar o item ao final do array
      const addUserCart = await UserModel.updateOne(
        { token: token },
        { $push: { carrinho: getProduct } }
      );
      return res.status(200).json({ addUserCart });
    }
  } catch (error:any) {
    return res.status(500).json({ error: error.message });
  }
  

}
