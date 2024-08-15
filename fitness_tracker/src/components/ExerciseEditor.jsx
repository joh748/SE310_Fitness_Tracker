import React, { Fragment, useState } from "react"
import _, { map } from 'underscore'
import Picker from 'react-mobile-picker'

const ExerciseEditor = ({exercise, deleteExercise, updateExercise}) => {

    const selections = {
        name: ['Curls', 'Squats', 'Deadlifts'], 
        weight: _.range(501),
        reps: _.range(201),
        setsGoal: _.range(101)
    }

    const [selectedName, setSelectedName] = useState({selectedValue: exercise.name})
    const [selectedWeight, setSelectedWeight] = useState({selectedValue: exercise.weight})
    const [selectedReps, setSelectedReps] = useState({selectedValue: exercise.reps})
    const [selectedSetsGoal, setSelectedSetsGoal] = useState({selectedValue: exercise.setsGoal})

    const finishEditing = () => {
        exercise.name = selectedName.selectedValue
        exercise.weight = selectedWeight.selectedValue
        exercise.reps = selectedReps.selectedValue
        exercise.setsGoal = selectedSetsGoal.selectedValue
        exercise.editMode = false
        updateExercise(exercise)
    }

    return (
        <Fragment>
            <tr key={exercise.id}>
                <td>
                    <Picker value={selectedName} onChange={setSelectedName} height={96} wheel="natural">
                        <Picker.Column name={"selectedValue"}>
                            {selections.name.map(option => (
                                <Picker.Item key={option} value={option}>
                                    {option}
                                </Picker.Item>
                            ))}
                        </Picker.Column>
                    </Picker>
                </td>
                <td>
                    <Picker value={selectedWeight} onChange={setSelectedWeight} height={96} wheel="natural">
                        <Picker.Column name={"selectedValue"}>
                            {selections.weight.map(option => (
                                <Picker.Item key={option} value={option}>
                                    {option}
                                </Picker.Item>
                            ))}
                        </Picker.Column>
                    </Picker>
                </td>
                <td>
                    <Picker value={selectedReps} onChange={setSelectedReps} height={96} wheel="natural">
                        <Picker.Column name={"selectedValue"}>
                            {selections.reps.map(option => (
                                <Picker.Item key={option} value={option}>
                                    {option}
                                </Picker.Item>
                            ))}
                        </Picker.Column>
                    </Picker>
                </td>
                <td>
                    <Picker value={selectedSetsGoal} onChange={setSelectedSetsGoal} height={96} wheel="natural">
                        <Picker.Column name={"selectedValue"}>
                            {selections.setsGoal.map(option => (
                                <Picker.Item key={option} value={option}>
                                    {option}
                                </Picker.Item>
                            ))}
                        </Picker.Column>
                    </Picker>
                </td>
                <td>{exercise.setsLogged}</td>
                <td><button onClick={() => finishEditing()}>Save</button></td>
                <td><button onClick={() => deleteExercise(exercise.id)}>Delete</button></td>
            </tr>
        </Fragment>
    );
};

export default ExerciseEditor;
