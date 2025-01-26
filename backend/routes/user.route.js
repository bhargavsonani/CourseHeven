import express from 'express';
import { login, signup, logout,purchases  } from '../controllers/user.controller.js';
import userMidddleware from '../middleware/user.mid.js';


const router =express.Router();

router.post('/signup',signup)
router.post('/login',login)
router.get('/logout',logout)

router.get("/purchases",userMidddleware,purchases);


export default router;