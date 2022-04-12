import mongoose from 'mongoose'
import User from './user.js'
import { userSchema } from './user.js'

const quoteSchema = new mongoose.Schema({
  author: String,
  content: String,
  username: String
})

const Quote = new mongoose.model("Quote", quoteSchema)

export default Quote
