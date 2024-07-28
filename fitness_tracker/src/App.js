import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import TempWorkoutDisplay from './components/TempWorkoutDisplay';


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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TempWorkoutDisplay data={workouts}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
