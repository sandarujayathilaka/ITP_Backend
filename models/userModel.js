const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
        type: String,
        required: [true, 'Please add a name'],
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
    },
    role: {
      type: String,
      enum: ['ADMIN', 'USER', 'EVENT_MANAGER', 'SHELTER_MANAGER'],
      default: 'USER',
      required: [true, 'Please add a role'],
    },
    pet: {
      name :{
        type : String,
        required: false,
      },
      age :{
        type : Number,
        required: false,
      }
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

module.exports = mongoose.model('User', userSchema)
