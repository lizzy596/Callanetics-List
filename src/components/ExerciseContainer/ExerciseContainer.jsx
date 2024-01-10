import React from 'react';
import Exercise from '../Exercise/Exercise';
import './ExerciseContainer.css';

const ExerciseContainer = ({ exercises }) => {
  const splitIndex1 = Math.ceil(exercises.length / 3);
  const splitIndex2 = 2 * splitIndex1;


  const column1 = exercises.slice(0, splitIndex1);
  const column2 = exercises.slice(splitIndex1, splitIndex2);
  const column3 = exercises.slice(splitIndex2);


  return (
    <div className="ExerciseContainer">
      <div className="Column">
        {column1.map((exercise, index) => (
          <Exercise key={index} name={exercise} />
        ))}
      </div>
      <div className="Column">
        {column2.map((exercise, index) => (
          <Exercise key={index + splitIndex1} name={exercise} />
        ))}
      </div>
      <div className="Column">
        {column3.map((exercise, index) => (
          <Exercise key={index + splitIndex2} name={exercise} />
        ))}
      </div>
    </div>
  );
};

export default ExerciseContainer;