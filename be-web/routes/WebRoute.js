import express from "express";
import {Login, logOut, Me} from "../controllers/Web.js"

const router = express.Router();

router.get('/me', Me);
router.post('/login', Login);
router.delete('/logout', logOut);

export default router;