const express = require('express')
const router = express.Router()
const {
    readBooking,
    addBooking,
    updateBooking,
    deleteBooking,
} = require('../controller/bookingController')
const { protect , userProtect , adminProtect} = require('../middleware/authMiddleware')

router.post('/', protect , addBooking)
router.get('/', protect , readBooking )
router.put('/:id', protect , updateBooking)
router.delete('/:id', protect , deleteBooking )


module.exports = router