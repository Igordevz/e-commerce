import { Schema, model } from "mongoose";
import { ICardapio } from "./protocoll";

export const SchemaCardapio = new Schema<ICardapio>({

    title: {type: String},
    cartegory: {type: String},
    seller: {type: String},
    description: {type: String},
    freight: {type: String},
    approved: {type: Boolean}, 
    ItemValue:  {type: String}

})

export const CardapioModel =  model<ICardapio>('cardapios', SchemaCardapio)