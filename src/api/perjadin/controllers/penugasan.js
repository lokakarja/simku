const Penugasan = require('../models/penugasan')

exports.readPenugasan = async (req, res) => {
	const { search, sortBy, sort } = req.query

	const penugasan = await Penugasan.find({
		$or: [{ judul: { $regex: search || '', $options: 'i' } }],
	}).sort({ [sortBy || 'tglSurat']: sort === 'desc' ? -1 : 1 })

	res.json({
		success: true,
		message: 'Data penugasan',
		data: penugasan,
	})
}

exports.readPenugasanById = async (req, res) => {
	const penugasan = await Penugasan.findById(req.params.id)

	if (!penugasan) {
		return res.status(404).json({
			success: false,
			message: 'Data penugasan not found',
		})
	}

	res.json({
		success: true,
		message: 'Data penugasan',
		data: penugasan,
	})
}

exports.createPenugasan = async (req, res) => {
	const data = req.body

	const penugasan = await Penugasan.create(data)

	res.json({
		success: true,
		message: 'Data penugasan created',
		data: penugasan,
	})
}

exports.updatePenugasan = async (req, res) => {
	const data = req.body

	const penugasan = await Penugasan.findByIdAndUpdate(
		req.params.id,
		{ ...data },
		{ new: true }
	)

	res.json({
		success: true,
		message: 'Data penugasan updated',
		data: penugasan,
	})
}

exports.deletePenugasan = async (req, res) => {
	const penugasan = await Penugasan.findByIdAndRemove(req.params.id)

	res.json({
		success: true,
		message: 'Data penugasan deleted',
		data: penugasan,
	})
}
