const express = require('express')
const router = express.Router()
const {registerPet,profileUpdate, getProfile,deleteProfile,getallprofile, Qr, shelterpets} = require('../controller/petProfileController')


router.post('/addpet',registerPet)
router.put('/updateprofile/:id',profileUpdate)
router.get('/profile/:profileId',getProfile)
router.delete('/deleteprofile/:id',deleteProfile)
router.get('/getallprofile',getallprofile)
router.get('/spets',shelterpets)
router.get('/pets/qrcode/:id',Qr)

// router.delete('/deletevac/:index/:id',deleteVac)
// router.post('/addreport',addReport)
// router.put('/reportupdate/:id/',reportUpdate)
// router.put('/addvac/:id/',addVac)
// router.get('/getreport/:id',getReport)
// router.delete('/deletereport/:id',deleteReport)
// router.get('/getallreport',getallReport)

// router.post('/addbreed',addbreed)
// router.get('/getbreed',getallbreeds)
// router.put('/breedupdate/:id',breedUpdate)
// router.delete('/deletebreed/:id',deletebreed)


// router.get('/statuscount',statusCount)
// router.get('/petcount',petstatusCount)
// router.get('/lastbreed',lastFive)
// router.get('/lastpets',lastpetprofile)


module.exports = router