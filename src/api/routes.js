const router = require('express').Router()
const authJwt = require('../utils/middlewares/auth-jwt')

const authRoutes = require('./auth/routes')
const perjadinRoutes = require('./perjadin/routes')

router.use('/auth', authRoutes)
router.use('/perjadin', authJwt, perjadinRoutes)

module.exports = router
