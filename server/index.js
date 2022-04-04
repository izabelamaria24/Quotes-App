import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import passport from 'passport'
import passportLocal from 'passport-local'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import bodyParser from 'body-parser'
import bcrypt from 'bcrypt'
import 'dotenv/config'

import User from './user.js'
import { configPassport } from './passportConfig.js'
import routes from './routes.js'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true
}))

app.use(cookieParser("secret"))
app.use(passport.initialize())
app.use(passport.session())

configPassport(passport)

app.use('/', routes)

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT || process.env.PORT, () => console.log('Connected to port')))
  .catch((err) => console.error(err.message))
