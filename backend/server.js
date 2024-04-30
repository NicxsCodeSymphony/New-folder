require('dotenv').config()

const express = require('express')
const workRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workRoutes)

// connect to db
mongoose.connect(process.env.DB_URI)
.then(() => {
    app.listen(process.env.PORT, () =>{
        console.log('listening on port:'+ process.env.PORT)
    })
    
})
.catch(err => console.log(err))

