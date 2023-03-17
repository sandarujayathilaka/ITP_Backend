const Joi = require('joi');
const pet = require('../models/petModel');

// Validate the request body

function validateRegReqBody(req,res) {
const schema = Joi.object({
    petName: Joi.string().required(),
    petId: Joi.string().required(),
    species: Joi.string().required(),
    breed: Joi.string().required(),
    gender: Joi.string().required(),
    age: Joi.string().required(),
    size: Joi.string().required(),
    color: Joi.string().required(),
    date:Joi.date().required(),
    petStatus: Joi.string().required()
    

  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  return true;

}

function validateReport(report) {
  const schema = Joi.object({
    petId: Joi.string().required(),
    currentHealthStatus: Joi.string().required(),
    vaccinations: Joi.array().items(Joi.object({
      name: Joi.string().required(),
      dateGiven: Joi.date().required(),
      expirationDate: Joi.date().required(),
    })),
  });

  return schema.validate(report);
}

module.exports = {validateRegReqBody,validateReport}