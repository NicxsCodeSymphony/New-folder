const express = require('express')
const Workout = require('../models/WorkoutModel')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    updateWorkout,
    deleteWorkout
} = require('../controllers/workoutController')


const router = express.Router()

// Get all workouts
router.get('/', getWorkouts)

router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// Update a workout
router.patch('/:id', updateWorkout)


module.exports = router