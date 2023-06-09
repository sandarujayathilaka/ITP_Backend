const express = require('express')
const cors = require('cors')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware') 
const vetRoutes = require('./routes/vetRoutes')
const healthRoutes = require('./routes/healthRoutes')
const breedRoutes = require('./routes/breedRoutes')
const statusRoutes = require('./routes/statusRoutes')
const connectDB = require('./config/db');
const port = process.env.port || 8080

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/users', require('./routes/userRoutes.js'))
app.use('/api/vet',vetRoutes)
app.use('/api/petbreed',breedRoutes)
app.use('/api/health',healthRoutes)
app.use('/api/petstatus',statusRoutes)                                                                                                       
app.use('/api/booking/', require('./routes/bookingRoutes.js'))
app.use('/api/counter', require('./routes/counterRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`));
