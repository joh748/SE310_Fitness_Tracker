import React from 'react';
import styles from '../module_css/Routine.module.css';

const Routine = ({ routines, onAddToToday }) => {
  return (
    <div className={styles.routines}>
      {routines.map((routine, index) => (
        <div key={index} className={styles.routineCard}>
          <h3>{routine.name}</h3>
          <p><strong>Date:</strong> {routine.date}</p>
          <p><strong>Muscles:</strong> {routine.muscles}</p>
          <div className={styles.exercises}>
            <h4>Exercises:</h4>
            <ul>
              {routine.exercises.map((exercise, i) => (
                <li key={i} className={styles.exercise}>
                  <span>{exercise.name}</span> - {exercise.sets} sets {exercise.reps} reps
                </li>
              ))}
            </ul>
          </div>
          <button 
            className={styles.addButton} 
            onClick={() => onAddToToday(routine)}
          >
            Add to Today's Exercise
          </button>
        </div>
      ))}
    </div>
  );
};

export default Routine;
