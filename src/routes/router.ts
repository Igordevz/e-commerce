import { Router } from "express";
import CreateUser from "../controllers/create_user";

export const router = Router();

router.get('/', (req, res) =>{
   return res.status(200).send('ola mundo');
})
router.post('/create_user', CreateUser)