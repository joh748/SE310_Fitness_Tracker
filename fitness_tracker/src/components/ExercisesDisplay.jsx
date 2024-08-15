import React, { Fragment, useState, useEffect, useCallback } from "react"
import ExerciseLogger from "./ExerciseLogger"
import ExerciseEditor from "./ExerciseEditor"

const ExercisesDisplay = () => {

    const [exercises, setExercises] = useState([
        {   
            id: 0,
            name: "Curls",
            weight: 20,
            reps: 10,
            setsGoal: 4,
            setsLogged: 2,
            editMode: false
        },
        {   
            id: 1,
            name: "Squats",
            weight: 50,
            reps: 10,
            setsGoal: 5,
            setsLogged: 0,
            editMode: false
        }
    ])

    const getLoadedExercises = async () => {
        try {
            // TODO: get currently loaded exercises from backend

            const jsonData = exercises

            setExercises(jsonData);

        } catch (err) {
            console.error(err.message)
        }
    }

    const deleteExerciseById = useCallback((idToDelete) => {
        setExercises(exercises => exercises.filter(({id}) => id !== idToDelete));
    }, [])

    const updateExerciseById = useCallback((updatedExercise) => {
        setExercises(exercises => exercises.map(exercise => {
            if (exercise.id === updatedExercise.id) {
                return updatedExercise
            } else {
                return exercise
            }
        }))
    }, [])

    const logWorkout = async () => {

        // TODO: confirm all exercises as completed

        setExercises([]);
    }
    

    useEffect(() => {
        getLoadedExercises();
    }, []);

    return (
        <Fragment>
            <h1>Exercises</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Weight</th>
                        <th>Reps</th>
                        <th>Sets Goal</th>
                        <th>Sets Completed</th>
                        <th>Delete Exercise</th>
                        <th>Log Set</th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map(exercise => (
                            exercise.editMode ? 
                                    <ExerciseEditor exercise={exercise} deleteExercise={deleteExerciseById} updateExercise={updateExerciseById} />
                                : 
                                    <ExerciseLogger exercise={exercise} updateExercise={updateExerciseById} />
                        )
                    )}
                </tbody>
            </table>
            <button>Add Exercise</button>
            <button onClick={() => logWorkout()}>Log Workout</button>
        </Fragment>
    )
}

export default ExercisesDisplay