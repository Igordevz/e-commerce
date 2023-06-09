import { Router } from "express";
import { CreateUser } from "../controllers/create_user";
import { GetInfoUser } from "../entities/getInfoUser";
import { LoginUser } from "../controllers/login_user";
import { AddNewCardapio } from "../controllers/cardapio";
import Filter from "../controllers/filter";
import { CartItem } from "../use-cases/cartItem";
import { RemoveCart } from "../use-cases/removecard";
import { PaymentStriper } from "../payments/payment.stripe";

export const router = Router();

router.get('/', (req, res) =>{

   return res.status(200).send('welcome the Api');
   
})

router.post('/create_user', CreateUser)
router.post('/get_user', GetInfoUser)
router.post('/login_user', LoginUser)
router.post('/create_cardapio', AddNewCardapio)
router.post('/filter-user', Filter)
router.post('/cart', CartItem)
router.delete('/cart', RemoveCart)

/// payment 

router.patch('/payments/:id', PaymentStriper)