const router = require('express').Router()
const authJwt = require('../../utils/middlewares/auth-jwt')

const authController = require('./controllers/auth')

// /api/auth
router.post('/login', authController.login)
router.post('/register', authController.register)
router.get('/me', authJwt, authController.readMe)
router.put('/me', authJwt, authController.updateMe)
router.put('/me/password', authJwt, authController.updatePassword)

module.exports = router
