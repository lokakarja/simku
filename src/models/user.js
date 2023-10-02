const mongoose = require('mongoose')

const schema = new mongoose.Schema(
	{
		username: String,
		password: String,
		nama: String,
		jabatan: String,
		email: String,
		role: [
			{
				client: String,
				level: String,
			},
		],
	},
	{
		timestamps: true,
		collection: 'user',
	}
)

module.exports = mongoose.model('User', schema)
