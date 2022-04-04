import express from 'express'

import { login, register, getCurrentUser } from './controllers.js'

const router = express.Router();

router.post("/register", register);
router.post("/login", login)

router.get("/currentUser", getCurrentUser)

export default router
