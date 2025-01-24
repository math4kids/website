import React from 'react';
import Quiz from './Quiz';

function AdditionQuiz() {
  const generateQuestions = (count, multiplier) => {
    const questions = [];
    for (let i = 0; i < count; i++) {
      const num2 = Math.floor(Math.random() * 12) + 1;
      questions.push({
        question: `${multiplier} + ${num2}`,
        answer: multiplier + num2
      });
    }
    return questions;
  };

  return <Quiz type="addition" generateQuestions={generateQuestions} />;
}

export default AdditionQuiz; 