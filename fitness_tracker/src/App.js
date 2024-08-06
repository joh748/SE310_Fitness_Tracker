import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import TempWorkoutDisplay from './components/TempWorkoutDisplay';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

function App() {

  // State for storing workouts
  const [workouts, setWorkouts] = useState([]);  
  const fetchWorkouts = async () => {
    // Send GET request to 'workouts/all' endpoint
    const response = await fetch('http://localhost:4001/workouts/all')

      // Parse JSON of response
      const workouts = await response.json()

      // Set state with workouts
      setWorkouts(workouts)

      // Log workouts to console
      console.log(workouts)
  }

  // Fetch workouts when component mounts
  useEffect(() => {
    fetchWorkouts()
  }, [])

  return (
    <BrowserRouter>
      <div>
        <Navigation/>
        <Routes>
          <Route path='LandingPage' element={<TempWorkoutDisplay data={workouts}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
