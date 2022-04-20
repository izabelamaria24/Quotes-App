import express from 'express'

import { login, register, getCurrentUser, changeProfilePicture, postQuote, getQuotes } from './controllers.js'

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.post("/postQuote", postQuote)

router.get("/currentUser", getCurrentUser)
router.get("/quotes", getQuotes)

export default router
