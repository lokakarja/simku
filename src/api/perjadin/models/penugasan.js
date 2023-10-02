const mongoose = require('mongoose')

const schema = new mongoose.Schema(
	{
		jenis: String,
		judul: String,
		tglMulai: Date,
		tglSelesai: Date,
		dasar: {
			nama: String,
			noDokumen: String,
			tglDokumen: Date,
		},
		tujuan: {
			tempat: String,
			alamat: String,
			kota: String,
			provinsi: String,
		},
		bebanAnggaran: String,
		spt: {
			noSurat: String,
			tempatSurat: String,
			tglSurat: Date,
			ttdSurat: {
				nama: String,
				jabatan: String,
				nip: String,
				pangkat: String,
			},
			paraf: [
				{
					nama: String,
					jabatan: String,
				},
			],
		},
	},
	{
		timestamps: true,
		collection: 'penugasan',
	}
)

module.exports = mongoose.model('Penugasan', schema)
