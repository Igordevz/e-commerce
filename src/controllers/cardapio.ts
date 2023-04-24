import { Request, Response } from "express";
import { CardapioModel } from "../models/cardapio/cardapio";

export async function AddNewCardapio(req: Request, res: Response) {

  const { title, cartegory, seller, ItemValue, description, freight } = req.body;


    const NewCardapio = new CardapioModel({
      title: title,
      cartegory: cartegory,
      seller: seller,
      ItemValue: ItemValue,
      description: description,
      freight: freight,
      approved: false
    })
    if(title == ""){
      return res.status(401).json({ msg: "fill in all fields" });
    }
    if(cartegory == ""){
      return res.status(401).json({ msg: "fill in all fields" });
    }
    if(seller == ""){
      return res.status(401).json({ msg: "fill in all fields" });
    }
    if(ItemValue == ""){
      return res.status(401).json({ msg: "Value price is Minimum 0.1" });
    }
    if(description == ""){
      return res.status(401).json({ msg: "fill in all fields"})
    }
    if(freight == ""){
      return res.status(401).json({ msg: "Value  freight is Minimum 0.1 " });
    }
    const addCardapio = await CardapioModel.create(NewCardapio);

    return res.status(201).json({ addCardapio });



}
