import express from 'express';
import { createUser,getAllUsers,getUserById,deleteUser,updateUser } from "../controllers/userController.js";
const router =express.Router();
 
router.post('/users/create',createUser);
router.get('/users',getAllUsers);
router.get('/users/:userId',getUserById);
router.delete('/users/:userId',deleteUser);
router.put('/users/:userId',updateUser);
export default router;