const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema(
  {
    cus_id: {
        type: String,
        required: [true, 'Please add a cus_id'],
        default: 'temp cus_id',
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
    },
    start_time: {
        type: String,
        required: [true, 'Please add an start_time'],
        unique: true,
    },
    end_time: {
        type: String,
        required: [false, 'Please add a end_time'],
    },
    status: {
      type: String,
      enum: ['BOOKED', 'CANCLED', 'PAID' , 'FINISHED'],
      default: 'BOOKED',
      required: [true, 'Please add a status'],
    },
    pets: {
      type: [
        {
          pets_id: {
            type: String,
            required: [true, 'Please add a pet_id'],
          },
        }
      ],
      required: [false],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Booking', bookingSchema)
