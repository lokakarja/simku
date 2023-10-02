const Pegawai = require('../../../models/pegawai')

exports.readPegawai = async (req, res) => {
	const { search, sortBy, sort } = req.query

	const pegawai = await Pegawai.find({
		$or: [
			{ nama: { $regex: search || '', $options: 'i' } },
			{ jabatan: { $regex: search || '', $options: 'i' } },
		],
	}).sort({ [sortBy || 'nama']: sort === 'desc' ? -1 : 1 })

	res.json({
		success: true,
		message: 'Data pegawai',
		data: pegawai,
	})
}

exports.readPegawaiById = async (req, res) => {
	const pegawai = await Pegawai.findById(req.params.id)

	if (!pegawai) {
		return res.status(404).json({
			success: false,
			message: 'Data pegawai not found',
		})
	}

	res.json({
		success: true,
		message: 'Data pegawai',
		data: pegawai,
	})
}

exports.createPegawai = async (req, res) => {
	const data = req.body

	const pegawai = await Pegawai.create(data)

	res.json({
		success: true,
		message: 'Data pegawai created',
		data: pegawai,
	})
}

exports.updatePegawai = async (req, res) => {
	const data = req.body

	const pegawai = await Pegawai.findByIdAndUpdate(
		req.params.id,
		{ ...data },
		{ new: true }
	)

	res.json({
		success: true,
		message: 'Data pegawai updated',
		data: pegawai,
	})
}

exports.deletePegawai = async (req, res) => {
	const pegawai = await Pegawai.findByIdAndRemove(req.params.id)

	res.json({
		success: true,
		message: 'Data pegawai deleted',
		data: pegawai,
	})
}
