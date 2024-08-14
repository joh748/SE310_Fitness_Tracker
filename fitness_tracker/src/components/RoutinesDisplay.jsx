import { React, useState } from 'react';
import Routine from './Routine';

const RoutineDisplay = () => {

    const [selectedRoutine, setSelectedRoutine] = useState(null);

    const handleAddToToday = (routine) => {
        setSelectedRoutine(routine);
        console.log(selectedRoutine);
      };

    // Todo: the data should come from the backend
    const routines = [
        {
          name: "Leg Routine",
          date: "14th Aug",
          muscles: "Quads, Hamstring, Calves",
          exercises: [
            { name: "Squat", sets: 4, reps: 10 },
            { name: "Lunge", sets: 3, reps: 12 },
            { name: "Leg Press", sets: 4, reps: 8 }
          ]
        },
        {
          name: "Arm Routine",
          date: "14th Aug",
          muscles: "Biceps, Triceps, Deltoids",
          exercises: [
            { name: "Bicep Curl", sets: 4, reps: 12 },
            { name: "Tricep Extension", sets: 3, reps: 10 },
            { name: "Shoulder Press", sets: 4, reps: 8 }
          ]
        },
        {
          name: "Core Routine",
          date: "14th Aug",
          muscles: "Abs",
          exercises: [
            { name: "Crunch", sets: 4, reps: 15 },
            { name: "Plank", sets: 3, reps: 1 },
            { name: "Leg Raise", sets: 3, reps: 12 }
          ]
        }
      ];

  return (
    <div>
      <h1>Workout Routines</h1>
      <Routine routines={routines} onAddToToday={handleAddToToday}/>
    </div>
  );
};

export default RoutineDisplay;
