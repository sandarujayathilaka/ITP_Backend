const express = require('express')
const router = express.Router()
const {
    readBooking,
    addBooking,
    updateBooking,
    deleteBooking,
} = require('../controller/bookingController')
const { protect , userProtect , adminProtect} = require('../middleware/authMiddleware')

router.post('/', addBooking)
router.get('/', readBooking )
router.put('/:id', updateBooking)
router.delete('/:id', deleteBooking )


module.exports = router