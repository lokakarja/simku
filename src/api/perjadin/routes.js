const router = require('express').Router()

const pegawaiController = require('./controllers/pegawai')
const penugasanController = require('./controllers/penugasan')

// /api/perjadin
router.get('/pegawai', pegawaiController.readPegawai)
router.get('/pegawai/:id', pegawaiController.readPegawaiById)
router.post('/pegawai', pegawaiController.createPegawai)
router.put('/pegawai/:id', pegawaiController.updatePegawai)
router.delete('/pegawai/:id', pegawaiController.deletePegawai)

router.get('/penugasan', penugasanController.readPenugasan)
router.get('/penugasan/:id', penugasanController.readPenugasanById)
router.post('/penugasan', penugasanController.createPenugasan)
router.put('/penugasan/:id', penugasanController.updatePenugasan)
router.delete('/penugasan/:id', penugasanController.deletePenugasan)

module.exports = router
