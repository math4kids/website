import React from 'react';
import Quiz from './Quiz';

function DivisionQuiz() {
  const generateQuestions = (count, multiplier) => {
    const questions = [];
    for (let i = 0; i < count; i++) {
      const num2 = Math.floor(Math.random() * 12) + 1;
      const dividend = multiplier * num2; // Ensures clean division
      questions.push({
        question: `${dividend} ÷ ${multiplier}`,
        answer: num2
      });
    }
    return questions;
  };

  return <Quiz type="division" generateQuestions={generateQuestions} />;
}

export default DivisionQuiz; 