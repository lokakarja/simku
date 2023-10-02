const mongoose = require('mongoose')

const schema = new mongoose.Schema(
	{
		nama: String,
		gelar: {
			depan: String,
			belakang: String,
		},
		status: String,
		nip: String,
		npwp: String,
		nik: String,
		jabatan: String,
		pangkat: String,
		golru: String,
	},
	{
		timestamps: true,
		collection: 'pegawai',
	}
)

module.exports = mongoose.model('Pegawai', schema)
