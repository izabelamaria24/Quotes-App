import User from './user.js'
import Quote from './quote.js'
import bcrypt from 'bcrypt'
import passport from 'passport'

export const login = (req, res, next) =>
{
	passport.authenticate("local", (err, user, info) =>
	{
		if (err) throw err
		if (!user) res.json(
		{
			message: "No user exists"
		})
		else
		{
			req.logIn(user, err =>
			{
				if (err) throw err
				res.json(
				{
					message: "Successfully authenticated"
				})
				console.log(req.user)
			})
		}
	})(req, res, next)
}

export const register = (req, res) =>
{
	User.findOne(
	{
		username: req.body.username
	}, async (err, doc) =>
	{
		if (err) throw err
		if (doc) res.json(
		{
			message: "User already exists!"
		})
		if (!doc)
		{
			const hashedPassword = await bcrypt.hash(req.body.password, 10)

			const newUser = new User(
			{
				username: req.body.username,
				password: hashedPassword
			})

			await newUser.save()
			res.json(
			{
				message: "User created"
			})
		}
	})
}

export const getCurrentUser = async (req, res) =>
{
	console.log(req.user)
	res.json(req.user)
}

export const changeProfilePicture = (req, res) =>
{
	User.findOneAndUpdate(
	{
		username: req.user.username
	},
	{
		profilePicture: req.body.profilePicture
	}, (err, doc) =>
	{
		if (err) throw err
		if (doc) res.json(req.user)
		else res.json(" User does not exist ")
	})
}

export const postQuote = async (req, res) => {
	const newQuote = new Quote({
		content: req.body.content,
		author: req.body.author,
		username: req.user.username
	})

	try {
		await newQuote.save()

		res.status(201).json(newQuote)
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}

export const getQuotes = async (req, res) => {
	try {
		await Quote.find({}, (err, result) => {
			if (err) {
				console.log(err)
			} else {
				res.json(result)
			}
		})
	} catch (err) {
		console.log(err)
	}
}
