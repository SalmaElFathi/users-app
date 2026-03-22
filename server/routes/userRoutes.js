import express from 'express';
import { createUser } from "../controllers/userController.js";
 const router =express.Router();
 
 router.post('/users/create',createUser);

 export default router;