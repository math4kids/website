import React from 'react';
import Quiz from './Quiz';

function SubtractionQuiz() {
  const generateQuestions = (count, multiplier) => {
    const questions = [];
    for (let i = 0; i < count; i++) {
      const num2 = Math.floor(Math.random() * multiplier) + 1; // Ensure num2 is smaller than multiplier
      questions.push({
        question: `${multiplier} - ${num2}`,
        answer: multiplier - num2
      });
    }
    return questions;
  };

  return <Quiz type="subtraction" generateQuestions={generateQuestions} />;
}

export default SubtractionQuiz; 