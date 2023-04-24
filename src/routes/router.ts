import { Router } from "express";
import CreateUser from "../controllers/create_user";
import { GetInfoUser } from "../entities/getInfoUser";
import { LoginUser } from "../controllers/login_user";
import { AddNewCardapio } from "../controllers/cardapio";

export const router = Router();

router.get('/', (req, res) =>{
   return res.status(200).send('welcome the Api');
})
router.post('/create_user', CreateUser)
router.post('/get_user', GetInfoUser)
router.post('/login_user', LoginUser)
router.post('/create_cardapio', AddNewCardapio)