const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
  updateUser,
} = require('../controller/userController')
const { protect , userProtect , adminProtect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.post('/update',protect, userProtect, updateUser)
router.get('/me', protect, getMe)
router.get('/', (req, res) => res.send('Hello World!')) 


module.exports = router