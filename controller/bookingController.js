const asyncHandler = require('express-async-handler')
const Booking = require('../models/bookingModel')

const addBooking = asyncHandler(async (req, res) =>{    

    const { description , start_time , end_time } = req.body

    const booking = await Booking.create({
        description,
        start_time,
        end_time
    })

    booking ? res.status(201).json(booking) : res.status(400).json({message: 'Booking not created'})

})


const readBooking = asyncHandler(async (req, res) =>{

    const booking = await Booking.find({})
    res.json(booking)
})


const updateBooking = asyncHandler(async (req, res) =>{

    const id = req.params.id
    const { description , startDate , endDate , status } = req.body

    const booking = await Booking.findByIdAndUpdate(id, {
        description,
        startDate,
        endDate,
        status
    })

    booking ? res.status(201).json(booking) : res.status(400).json({message: 'Booking not updated'})
})


const deleteBooking = asyncHandler(async (req, res) =>{

    const id = req.params.id
    const booking = await Booking.findByIdAndDelete(id)

    booking ? res.status(200).json(booking) : res.status(400).json({message: 'Booking not deleted'})
})

module.exports = {
    addBooking,
    readBooking,
    updateBooking,
    deleteBooking
}
