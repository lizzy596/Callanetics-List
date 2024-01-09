// Exercise.js

import React, { useState } from 'react';
import './Exercise.css';

const Exercise = ({ name }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handlePress = () => {
    setIsDisabled(true);
  };

  return (
    <div
      className={`ExerciseLabelContainer ${isDisabled ? 'Disabled' : ''}`}
      onClick={handlePress}
      disabled={isDisabled}
    >
      <p className="ExerciseText">{name}</p>
    </div>
  );
};

export default Exercise;