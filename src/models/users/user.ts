import { Schema, model } from "mongoose"
import { Iuser } from "./protocoll"


const SchemaUser = new Schema<Iuser>({
    name: {type: String, required:true},
    password: {type: String, required:true},
    confirmPassword: {type: String, required:true},
    email: {type: String, required: true},
    cpf: {type: String, required:true},
    carrinho: {type: [], required:true},
    typePagement: {type: [], required:true}
})

export const UserModel = model<Iuser>('user', SchemaUser)