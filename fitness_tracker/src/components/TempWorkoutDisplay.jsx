import { useState } from 'react';
import RoutinesView from './RoutinesView';
import ExercisesView from './ExercisesView';

const TempWorkoutDisplay = ({ data }) => {

  // https://stackoverflow.com/questions/70612769/how-do-i-recognize-swipe-events-in-react
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const [isLeft, setIsLeft] = useState(true)

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 1 

  const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    {(isLeftSwipe || isRightSwipe) && (isLeftSwipe ? setIsLeft(true) : setIsLeft(false))}
    if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right')
  }

    return (
      <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        {data.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Weight: {item.weight}</p>
            <p>Set: {item.set}</p>
            <p>Reps: {item.rep}</p>
          </div>
        ))}
        {isLeft ? <RoutinesView/> : <ExercisesView/>}
      </div>
    );
  };
  
  export default TempWorkoutDisplay;