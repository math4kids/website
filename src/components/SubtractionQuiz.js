import React from 'react';
import Quiz from './Quiz';
import { generateQuestions } from '../utils/mathOperations';

function SubtractionQuiz() {
  return (
    <Quiz 
      type="subtraction" 
      generateQuestions={(count) => generateQuestions('subtraction', count)} 
    />
  );
}

export default SubtractionQuiz; 