import React from "react";
import './GoalList.css';

const GoalList = ({courseGoals}) => {
    return(
        <ul className='goal-list'>
            {courseGoals.map((course) => (
                <li key={course.id}>{course.text}</li>
            ))}
        </ul>
    )
}

export default GoalList;