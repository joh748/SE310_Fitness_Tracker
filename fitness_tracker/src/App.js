import './App.css';
import { useState, useEffect } from 'react';
import TempWorkoutDisplay from './components/TempWorkoutDisplay';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Brush, Legend, Tooltip } from 'recharts';

const data = [{name: 'Monday', volume1: 400, volume2: 900, amt: 2400}, 
  {name: 'Tuesday', volume1: 200, volume2: 2400, amt: 2400},
  {name: 'Wednesday', volume1: 300, volume2: 1100, amt: 2400},
  {name: 'Thursday', volume1: 100, volume2: 800, amt: 2400},
  {name: 'Friday', volume1: 100, volume2: 600, amt: 2400}];


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
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="volume1" stroke="#8884d8" strokeWidth={3} />
        <Line type="monotone" dataKey="volume2" stroke="#afafaf" strokeWidth={3} />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Brush dataKey='name' height={30} stroke="#8884d8"/>
      </LineChart>
    </div>
  );
}

export default App;
