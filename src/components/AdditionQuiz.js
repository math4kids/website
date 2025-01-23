import React from 'react';
import Quiz from './Quiz';
import { generateQuestions } from '../utils/mathOperations';

function AdditionQuiz() {
  return (
    <Quiz 
      type="addition" 
      generateQuestions={(count) => generateQuestions('addition', count)} 
    />
  );
}

export default AdditionQuiz; 