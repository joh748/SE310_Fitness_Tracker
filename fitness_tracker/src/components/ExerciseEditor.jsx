import React, { Fragment } from "react";

const ExerciseEditor = ({exercise, updateExercise}) => {

    const logSet = () => {
        exercise.setsLogged += 1
        updateExercise(exercise)
    }

    const finishEditing = () => {
        exercise.editMode = false
        updateExercise(exercise)
    }

    return (
        <Fragment>
            <tr key={exercise.id}>
                <td>edit {exercise.name}</td>
                <td>edit {exercise.weight}</td>
                <td>edit {exercise.reps}</td>
                <td>edit {exercise.setsGoal}</td>
                <td>edit {exercise.setsLogged}</td>
                <td><button onClick={() => finishEditing()}>Done</button></td>
                <td><button onClick={() => logSet()}>Log Set</button></td>
            </tr>
        </Fragment>
    );
};

export default ExerciseEditor;
