const mongoose = require('mongoose')

const petSchema = mongoose.Schema(
  {
    petName: {
        type: String,
        required: [true, 'Please add a name'],
    },
    petId:{
        type: String,
        required: [true, 'Please add a petid'],
    },
    species: {
        type: String,
        required: [true, 'Please add an email'],
    },
    breed: {
        type: String,
        required: [true, 'Please add a password'],
    },
  
    gender:{
        type:String,
        required: [true, 'Please add a gender'],

    },
    age:{
        type:String,
        required: [true, 'Please add a Age'],

    },
    weight:{
        type:String,
        required: [true, 'Please add a size'],
    },

    color:{
        type:String,
        required: [true, 'Please add a color'],
    },
     
    date:{
        type:Date,
        required: [true, 'Please add check in date'],
    },

    petStatus:{
        type:String,
        required: [true, 'Please add a status'],
    },

    qrCode: { type: String, required: true },

    image:{ type:String,required:true},

    price:{
        type:String,
        required: [true, 'Please add a price'],
    }

  }
)

module.exports = mongoose.model('pet', petSchema)
