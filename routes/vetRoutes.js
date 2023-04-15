const express = require('express')
const router = express.Router()
const {registerPet,profileUpdate, getProfile,deleteProfile,getallprofile,searchprofile, Qr, shelterpets, addbreed, getallbreeds, breedUpdate, deletebreed, petstatusCount} = require('../controller/petProfileController')
const { addReport,reportUpdate,getReport,deleteReport,getallReport, addVac, deleteVac, statusCount } = require('../controller/healthController')

router.post('/addpet',registerPet)
router.put('/updateprofile/:id',profileUpdate)
router.get('/profile/:profileId',getProfile)
router.delete('/deleteprofile/:id',deleteProfile)
router.delete('/deletevac/:index/:id',deleteVac)
router.get('/getallprofile',getallprofile)
router.post('/addreport',addReport)
router.get('/search',searchprofile)
router.put('/reportupdate/:id/',reportUpdate)
router.put('/addvac/:id/',addVac)
router.get('/getreport/:id',getReport)
router.delete('/deletereport/:id',deleteReport)
router.get('/getallreport',getallReport)
router.get('/pets/qrcode/:id',Qr)
router.get('/statuscount',statusCount)
router.get('/spets',shelterpets)
router.post('/addbreed',addbreed)
router.get('/getbreed',getallbreeds)
router.put('/breedupdate/:id',breedUpdate)
router.delete('/deletebreed/:id',deletebreed)
router.get('/petcount',petstatusCount)

module.exports = router