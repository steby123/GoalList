import React, {useState} from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id:'cg1', text: 'Finish the Course' },
    { id:'cg2', text: 'Learn all about the Course Main Topic'},
    { id:'cg3', text: 'Help other students in the Course Q&amp; A'}
  ])

  const addNewGoalHandler = (newGoal) => {
    setCourseGoals(courseGoals.concat(newGoal));
  }
  return (
    <div>
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList courseGoals={courseGoals}/>
    </div>
  )
};

export default App;
