import express from 'express';
import { PORT, mongoDBURL } from './config.js'
import mongoose from 'mongoose';
import bookRoute from './routes/bookRoutes.js';
import cors from 'cors'

const app = express()

app.use(express.json())

// Middleware 
app.use(cors())



app.get('/', (req, res) => {
    return res.status(234).send("WELCOME TO MERN STACK TURTORIAL")
})

app.use('/books', bookRoute)



mongoose
.connect(mongoDBURL)
.then(() => {
    console.log(`App connected to database!`)
    app.listen(PORT, () => {
        console.log(`App is listening on ${PORT}`)
    })    
})
.catch((err) => {
    console.log(err)
})