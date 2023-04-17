const breed = require('../models/breedModel');


//-------------Add Breed------------------

const addbreed = ((req, res) => {

    console.log("Breed called")
    
    const { breeds,speciesOne } = req.body;
  
    console.log(breeds)
  
    // Create a new profile
    const newbreed = new breed({
      breed:breeds,
      species:speciesOne,
      date:new Date().toLocaleString("en-US", { timeZone: "Asia/Colombo" })
     
    });
    
      newbreed.save()
        .then(() => {
          // Respond with success message and the new pet object
          res.status(201).json({ message: 'Profile added', breed: newbreed });
        })
        .catch((err) => {
          // Log the error
          console.log(err);
          // Respond with an error message
          res.status(500).json({ error: 'Failed to add profile' });
        });
  
  });

  //get all breeds

const getallbreeds=(async (req,res) => {
    try {
        // get all the profile
        const allbreed= await breed.find();
        // return the profile
        res.status(200).json({ allbreed });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
  });

  // update pet breed

const breedUpdate = (async(req,res)=>{

    const {id} = req.params;
    const { breeds,speciesOne } = req.body;
    const updatedProfileData = {breed:breeds,species:speciesOne};

    console.log(id)
    console.log(breeds)
  
    try {
        // Ensure the profile belongs to the user making the request
        const profile = await breed.findOne({ _id: id });
    
        if (!profile) {
            return res.status(404).send({ error: 'Profile not found' });
        }
  
        // Update the profile
        await breed.findOneAndUpdate({ _id: id }, updatedProfileData);
  
        // Return success response
        res.status(200).send({ status: 'Profile updated' });
    } catch (err) {
        console.log(`error:${err}`);
        res.status(500).send({ error: 'Internal server error' });
    }
  });
  

  //delete profile
const deletebreed = (async (req, res) => {

    const { id } = req.params;
    try {
        // Check if the profile exists
        const deletedProfile = await breed.findOne({_id:id});
        if (!deletedProfile) {
            return res.status(404).json({ error: 'profile not found' });
        }
        // Delete the profile
        await breed.findOneAndDelete({_id:id});
  
        return res.status(200).json({ message: 'profile deleted successfully', deletedProfile });
    } catch (err) {
        return res.status(500).json({ error: 'Internal server error' });
    }
  });

  module.exports = {addbreed,getallbreeds,breedUpdate,deletebreed}