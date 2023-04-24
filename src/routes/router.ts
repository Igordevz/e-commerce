import { Router } from "express";
import CreateUser from "../controllers/create_user";
import { GetInfoUser } from "../entities/getInfoUser";

export const router = Router();

router.get('/', (req, res) =>{
   return res.status(200).send('welcome the Api');
})
router.post('/create_user', CreateUser)
router.post('/get_user', GetInfoUser)