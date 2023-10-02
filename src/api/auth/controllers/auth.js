const User = require('../../../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
	const { username, password } = req.body

	const user = await User.findOne({ username: username })

	if (!user || !bcrypt.compareSync(password, user.password)) {
		return res.status(422).json({
			success: false,
			message: 'Invalid username/password',
		})
	}

	res.json({
		success: true,
		message: 'Login success',
		data: {
			...user.toJSON(),
			password: undefined,
			token: jwt.sign({}, process.env.JWT_SECRET, {
				subject: user._id.toString(),
			}),
		},
	})
}

exports.register = async (req, res) => {
	const data = req.body

	const user = await User.create({
		...data,
		password: bcrypt.hashSync(data.password, bcrypt.genSaltSync()),
	})

	res.json({
		success: true,
		message: 'User created successfully',
		data: {
			...user.toJSON(),
			password: undefined,
		},
	})
}

exports.readMe = async (req, res) => {
	const user = await User.findById(req.user.sub).select('-password')
	res.json({
		success: true,
		message: 'Profile data',
		data: user,
	})
}

exports.updateMe = async (req, res) => {
	const data = req.body

	const user = await User.findByIdAndUpdate(
		req.user.sub,
		{ ...data },
		{ new: true }
	).select('-password')

	res.json({
		success: true,
		message: 'Profile updated',
		data: user,
	})
}

exports.updatePassword = async (req, res) => {
	const { password, newPassword } = req.body

	const user = await User.findById(req.user.sub)

	if (!user || !bcrypt.compareSync(password, user.password)) {
		return res.status(422).json({
			success: false,
			message: 'Wrong password',
		})
	}

	const userUpdate = await User.findByIdAndUpdate(
		req.user.sub,
		{ password: bcrypt.hashSync(newPassword, bcrypt.genSaltSync()) },
		{ new: true }
	).select('-password')

	res.json({
		success: true,
		message: 'Password updated',
		data: userUpdate,
	})
}
