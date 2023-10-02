const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
	const bearerToken = req.headers['authorization']
	if (!bearerToken) {
		return res.status(401).json({
			success: false,
			message: 'Token is required',
		})
	}

	// Remove Bearer from string
	const token = bearerToken.split(' ')[1]

	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			return res.status(401).json({
				success: false,
				message: 'Invalid token',
			})
		}

		req.user = decoded
		next()
	})
}
