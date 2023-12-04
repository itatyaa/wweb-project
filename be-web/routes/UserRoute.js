import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/Users.js"
import { verifyUser, adminOnly } from "../middleware/WebUser.js";

const router = express.Router();

router.get('/users', verifyUser, adminOnly, getUsers);
router.get('/users/:id', verifyUser, adminOnly, getUserById);
router.post('/users', verifyUser, adminOnly, createUser);
router.put('/users/:id', verifyUser, adminOnly, updateUser);
router.delete('/users/:id', verifyUser, adminOnly, deleteUser);

export default router;