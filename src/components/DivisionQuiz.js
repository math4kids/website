import React from 'react';
import Quiz from './Quiz';

function DivisionQuiz() {
  const generateQuestions = (count) => {
    const questions = [];
    for (let i = 0; i < count; i++) {
      const divisor = Math.floor(Math.random() * 12) + 1;
      const quotient = Math.floor(Math.random() * 12) + 1;
      const dividend = divisor * quotient; // Ensures clean division
      questions.push({
        question: `${dividend} ÷ ${divisor}`,
        answer: quotient
      });
    }
    return questions;
  };

  return <Quiz type="division" generateQuestions={generateQuestions} />;
}

export default DivisionQuiz; 