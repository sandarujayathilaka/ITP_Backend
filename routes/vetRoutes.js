const express = require('express')
const router = express.Router()
const {registerPet,profileUpdate, getProfile,deleteProfile,getallprofile,searchprofile, Qr} = require('../controller/petProfileController')
const { addReport,reportUpdate,getReport,deleteReport,getallReport, addVac, deleteVac } = require('../controller/healthController')

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

module.exports = router