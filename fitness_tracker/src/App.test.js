import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Routines', () => {
  render(<App />);
  const rountinesElement = screen.getByText("Routines");
  expect(rountinesElement).toBeInTheDocument();
});

test('renders Exercises', () => {
  render(<App/>);
  const exercisesElemet = screen.getByText("Exercises");
  expect(exercisesElemet).toBeInTheDocument();
});