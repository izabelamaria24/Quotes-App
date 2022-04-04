
import User from './user.js'
import bcrypt from 'bcrypt'
import passport from 'passport'

export const login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err
    if (!user) res.json({ message: "No user exists" })
    else {
      req.logIn(user, err => {
        if (err) throw err
        res.json({ message: "Successfully authenticated" })
        console.log(req.user)
      })
    }
  })(req, res, next)
}

export const register = (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err
    if (doc) res.json({ message: "User already exists!" })
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword
      })

      await newUser.save()
      res.json({ message: "User created" })
    }
  })
}

export const getCurrentUser = (req, res) => {
  res.json(req.user)
}
