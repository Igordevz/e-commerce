import { Document, Schema, model } from "mongoose"

interface Iuser extends Document{

    name: string,
    password: string,
    confirmPassword: string,
    cpf: string,
    carrinho: [],
    typePagement: [],
}

const SchemaUser = new Schema<Iuser>({
    name: {type: String, required:true},
    password: {type: String, required:true},
    confirmPassword: {type: String, required:true},
    cpf: {type: String, required:true},
    carrinho: {type: [], required:true},
    typePagement: {type: [], required:true}
})

const UserModel = model<Iuser>('user', SchemaUser)