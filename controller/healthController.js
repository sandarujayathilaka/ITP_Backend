const Joi = require('joi');
const report = require('../models/healthModel');
const pet = require('../models/petModel');
const{validateReport}=require('../validations/vetValidation')


const addReport = (async (req, res) => {
console.log(req.body)
  // Validate the request body
  const { error } = validateReport(req.body);
  if (error)
  return res.status(400).json({ error: error.details[0].message });

  // Check if the petId exists in the pet collection
  const petProfile = await pet.findOne({ petId: req.body.petId });
  if (!petProfile) 
  return res.status(400).json({ error: 'Invalid petId' });

  // Create a new health report
  const newReport = new report({
    petId: req.body.petId,
    currentHealthStatus: req.body.currentHealthStatus,
    vaccinations: req.body.vaccinations
    
  });

  // Save the health report to the database
  newReport.save()
    .then(() => {
      // Respond with success message
      res.status(201).json({ message: 'Report Saved' });
    })
    .catch((err) => {
      // Log the error
      console.log(err);
      // Respond with an error message
      res.status(500).json({ error: 'Failed to save report due' });
    })});

    

    //--------------------update Report-----------------------
    const reportUpdate = async (req, res) => {
      const { id } = req.params;
      const { petId, currentHealthStatus, vaccinations } = req.body;
      console.log("add vac called")

      console.log(req.body)
    
      // Validate the request body
      // const { error } = validateReport(req.body);
      // if (error) return res.status(400).json({ error: error.details[0].message });
    
      try {
        // Ensure the report belongs to the petId
        const reportData = await report.findOne({ petId: id });
        if (!reportData) return res.status(404).json({ error: 'Report not found' });
    
        // Update the report
        await report.updateOne(
          { petId: id },
          {
            $set: { currentHealthStatus: currentHealthStatus },
            $push: { vaccinations: { $each: vaccinations } }
          }
        );
    
        // Return success response
        res.status(200).json({ message: 'Report updated' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
    };
    

      //-----------------get one pet Report ------------------------------

const getReport = (async(req,res)=>{

  const { id } = req.params;
  let  petReport = null;

  try {
      petReport = await report.findOne({petId:id});
  } catch (err) {
      console.error(err);
      return res.status(500).json({
          error: 'Internal server error'
      });
  }
  // check if profile exists
  if (! petReport) {
      return res.status(404).json({
          error: 'Profile not found'
      });
  }
  res.status(200).json({ petReport})
})

//-------------------delete report------------------------
const deleteReport = (async (req, res) => {

  const { id } = req.params;
  try {
      // Check if the profile exists
      const deletedreport = await report.findOne({petId:id});
      if (!deletedreport) {
          return res.status(404).json({ error: 'profile not found' });
      }
      // Delete the profile
      await report.findOneAndDelete({petId:id});

      return res.status(200).json({ message: 'profile deleted successfully', deletedreport });
  } catch (err) {
      return res.status(500).json({ error: 'Internal server error' });
  }
});

//-------------------get all profiles---------------------

const getallReport=(async (req,res) => {
  try {
      // get all the profile 
      const petReport= await report.find();
      // return the profile
      res.status(200).json({ petReport });
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
  }
});

    module.exports = {addReport,reportUpdate,getReport,deleteReport,getallReport}
