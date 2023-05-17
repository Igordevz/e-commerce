import Stripe from "stripe"
import protocollsStripe from "./protocollsStripe";

 export const stripe = new Stripe(protocollsStripe.secretKey, {
    apiVersion: "2022-11-15",
});


