import express from "express";
import {loginController, registerController, registerControllerData} from "../controller/passport"
const router = express.Router();

router.get('/login', loginController)
router.get('/register', registerController)
router.post('/register', registerControllerData)

export default router;