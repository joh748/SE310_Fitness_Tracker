import React, { useState } from 'react';
import styles from '../module_CSS/Routine.module.css';

const Routine = ({ routine, onSave, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedRoutine, setEditedRoutine] = useState(routine);

    const handleExerciseChange = (index, field, value) => {
        const updatedExercises = [...editedRoutine.exercises];
        updatedExercises[index][field] = value;
        setEditedRoutine({ ...editedRoutine, exercises: updatedExercises });
    };

    const handleAddExercise = () => {
        setEditedRoutine({ 
            ...editedRoutine, 
            exercises: [...editedRoutine.exercises, { name: '', sets: '', reps: '', weight: '' }] 
        });
    };

    const handleDeleteExercise = (index) => {
        const updatedExercises = editedRoutine.exercises.filter((_, i) => i !== index);
        setEditedRoutine({ ...editedRoutine, exercises: updatedExercises });
    };

    const handleSave = () => {
        onSave(editedRoutine);
        setIsEditing(false);
    };

    return (
        <div className={styles.routineCard}>
            {isEditing ? (
                // When editing a routine
                <>
                    <input 
                        type="text" 
                        className={styles.inputField}
                        placeholder="Routine Name" 
                        value={editedRoutine.name} 
                        onChange={(e) => setEditedRoutine({ ...editedRoutine, name: e.target.value })} 
                    />

                    <input 
                        type="text" 
                        className={styles.inputField}
                        placeholder="Muscle Groups" 
                        value={editedRoutine.muscles} 
                        onChange={(e) => setEditedRoutine({ ...editedRoutine, muscles: e.target.value })} 
                    />

                    <p className={styles.routineDetails}>Date: {editedRoutine.date}</p>

                    {editedRoutine.exercises.map((exercise, index) => (
                        <div key={index} className={styles.exercise}>  

                            <div className={styles.inputWithSuffix}>
                                <input 
                                    type="number" 
                                    className={styles.inputField}
                                    placeholder="Sets" 
                                    value={exercise.sets} 
                                    onChange={(e) => handleExerciseChange(index, 'sets', e.target.value)} 
                                />
                                <span className={styles.suffix}>sets</span>
                            </div>          
                            

                            <div className={styles.inputWithSuffix}>
                                <input 
                                    type="number" 
                                    className={styles.inputField}
                                    placeholder="Reps" 
                                    value={exercise.reps} 
                                    onChange={(e) => handleExerciseChange(index, 'reps', e.target.value)} 
                                />
                                <span className={styles.suffix}>reps</span>
                            </div>
                            
                            <div className={styles.inputWithSuffix}>
                                <input 
                                    type="number" 
                                    className={styles.inputField}
                                    placeholder="Weight" 
                                    value={exercise.weight} 
                                    onChange={(e) => handleExerciseChange(index, 'weight', e.target.value)} 
                                />
                                <span className={styles.suffix}>kg</span>
                            </div>
                            
                            <button 
                                className={styles.deleteButton} 
                                onClick={() => handleDeleteExercise(index)}
                            >
                                Delete Exercise
                            </button>
                        </div>
                    ))}
                    <button 
                        className={styles.addButton} 
                        onClick={handleAddExercise}
                    >
                        Add Exercise
                    </button>
                    <div>
                        <button 
                            className={`${styles.button} ${styles.saveButton}`} 
                            onClick={handleSave}
                        >
                            Save
                        </button>
                        <button 
                            className={`${styles.button} ${styles.cancelButton}`} 
                            onClick={() => setIsEditing(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </>
            ) : (
                // When not editing a routine
                <>
                    <h3 className={styles.routineTitle}>{routine.name}</h3>
                    <p className={styles.routineDetails}>Date: {routine.date}</p>
                    <p className={styles.routineDetails}>Muscles: {routine.muscles}</p>
                    {routine.exercises.map((exercise, index) => (
                        <div key={index} className={styles.exercise}>
                            <span>{exercise.name}</span> {exercise.sets} sets {exercise.reps} reps {exercise.weight} kg
                        </div>
                    ))}
                    <button 
                        className={`${styles.button} ${styles.saveButton}`} 
                        onClick={() => setIsEditing(true)}
                    >
                        Edit Routine
                    </button>
                    <button 
                        className={`${styles.button} ${styles.deleteButton}`} 
                        onClick={onDelete}
                    >
                        Delete Routine
                    </button>
                </>
            )}
        </div>
    );
};

export default Routine;
