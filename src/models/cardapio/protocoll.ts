import { Document } from "mongoose";

export interface ICardapio extends Document{
    ImgUrl: string,
    title: string,
    cartegory: string,
    seller: string,
    ItemValue: string,
    description: string,
    freight: String,
    approved: boolean
    
}