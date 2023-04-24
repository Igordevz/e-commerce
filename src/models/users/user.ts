import { Schema, model } from "mongoose"
import { Iuser } from "./protocoll"


const SchemaUser = new Schema<Iuser>({
    name: {type: String, required:true},
    password: {type: String, required:true},
    confirmPassword: {type: String, required:true},
    email: {type: String, required: true},
    cpf: {type: String},
    location: {type: []},
    token: {type: String, required: true},
    carrinho: {type: []},
    typePagement: {type: []}
})

export const UserModel = model<Iuser>('user', SchemaUser)