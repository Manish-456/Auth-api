const express = require('express')
const app = express()
const connectDB = require('./Backend/db/connect')
require('dotenv').config()
const cors = require('cors')
app.use(express.json())
app.use(cors())

const Auth  = require('./Backend/controller/Auth')
app.use('/api/v1', Auth)
const start = async() => {
 await connectDB(process.env.MONGO_URI)
app.listen(process.env.PORT, () => {
 console.log(`Server listening to the PORT ${process.env.PORT}`)
})
}
start()