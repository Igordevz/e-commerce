import mongoose from "mongoose";

export default async function DbConect(){

    try {
        mongoose.connect(`mongodb+srv://${process.env.ACESS_USER}:${process.env.ACESS_PASS}@cluster0.qpmgxbx.mongodb.net/test`)
    } catch (error) {
        console.log(error);
        
    }

}