import mongoose from 'mongoose'

export const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  profilePicture: String
})

const User = new mongoose.model("User", userSchema)

export default User
