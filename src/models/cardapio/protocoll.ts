import { Document } from "mongoose";

export interface ICardapio extends Document{

    title: string,
    cartegory: string,
    seller: string,
    value: string,
    description: string,
    freight: string,
    
}