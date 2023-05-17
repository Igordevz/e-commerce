import { Request, Response } from "express";
import { stripe } from "../config/stripe";

export async function PaymentStriper(req: Request, res:Response){

    const { productsId } = req.params

    const products =  await stripe.products.list();

    const session = await stripe.checkout.sessions.create({
        line_items: [
                {
                    price: "price_1N8lSsKAjEEu1q7wF5BIqd2r",
                    quantity: 1,
                },
            ], 
        mode: 'payment', 
        success_url: `https://www.youtube.com/`,
        cancel_url: `https://www.instagram.com/`,
    })
    res.status(200).json({ msg: session})
}   