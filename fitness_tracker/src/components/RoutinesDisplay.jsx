import React, { useState } from 'react';
import Routine from './Routine';
import NewRoutineModal from './NewRoutineModal';
import styles from '../module_CSS/RoutinesDisplay.module.css'

const RoutinesDisplay = () => {
    const [routines, setRoutines] = useState([
        // Sample data, need to replace with actual data from backend
        {
            name: "Leg Routine",
            date: "14th Aug 2024",
            muscles: "Quads, Hamstring, Calves",
            exercises: [
                { name: "Squat", sets: 4, reps: 10, weight: 100 },
                { name: "Lunge", sets: 3, reps: 12, weight: 50 },
            ]
        }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSaveRoutine = (newRoutine) => {
        setRoutines([...routines, newRoutine]);
        setIsModalOpen(false);
    };

    const handleDeleteRoutine = (routineToDelete) => {
        setRoutines(routines.filter(routine => routine !== routineToDelete));
    };

    const handleEditRoutine = (updatedRoutine, index) => {
        console.log("routines:", routines);
        console.log("Updated routine:", updatedRoutine); // Debug log
        setRoutines(routines.map((routine, i) => i === index ? updatedRoutine : routine));
    };
    

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Workout Routines</h1>
            <button 
                className={styles.button}
                onClick={() => setIsModalOpen(true)}>Create New Routine</button>
            {isModalOpen && 
                <NewRoutineModal 
                    onSave={handleSaveRoutine} 
                    onClose={() => setIsModalOpen(false)} 
                />
            }
            {routines.map((routine, index) => (
                <Routine 
                    key={index} 
                    routine={routine} 
                    onSave={(updatedRoutine) => handleEditRoutine(updatedRoutine, index)} 
                    onDelete={() => handleDeleteRoutine(routine)} 
                />
            ))}
        </div>
    );
};

export default RoutinesDisplay;
