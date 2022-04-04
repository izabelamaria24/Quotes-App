import mongoose from 'mongoose'

const quoteSchema = new mongoose.Schema({
  userId: String,
  author: String,
  content: String
})

const Quote = new mongoose.model("Quote", quoteSchema)

export default Quote
