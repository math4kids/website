import React from 'react';
import Quiz from './Quiz';

function MultiplicationQuiz() {
  const generateQuestions = (count) => {
    const questions = [];
    for (let i = 0; i < count; i++) {
      const num1 = Math.floor(Math.random() * 12) + 1;
      const num2 = Math.floor(Math.random() * 12) + 1;
      questions.push({
        question: `${num1} × ${num2}`,
        answer: num1 * num2
      });
    }
    return questions;
  };

  return <Quiz type="multiplication" generateQuestions={generateQuestions} />;
}

export default MultiplicationQuiz; 