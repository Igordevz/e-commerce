import { Document } from "mongoose";

export interface Iuser extends Document{

    name: string,
    password: string,
    email: string,
    confirmPassword: string,
    cpf: string,
    location: [],
    carrinho: [],
    typePagement: [],
}
