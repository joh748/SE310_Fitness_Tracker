import React, { Fragment } from "react";

const ExerciseLogger = ({exercise, deleteExercise, updateExercise}) => {

    const logSet = () => {
        exercise.setsLogged += 1
        updateExercise(exercise)
    }

    return (
        <Fragment>
            <tr key={exercise.id}>
                <td>{exercise.name}</td>
                <td>{exercise.weight}</td>
                <td>{exercise.reps}</td>
                <td>{exercise.setsGoal}</td>
                <td>{exercise.setsLogged}</td>
                <td><button onClick={() => deleteExercise(exercise.id)}>Delete</button></td>
                <td><button onClick={() => logSet()}>Log Set</button></td>
            </tr>
        </Fragment>
    );
};

export default ExerciseLogger;
