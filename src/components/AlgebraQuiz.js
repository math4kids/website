import React from 'react';
import Quiz from './Quiz';

function AlgebraQuiz({ questionCount, userName }) {
  const generateQuestions = (count, multiplier) => {
    const questions = [];
    const maxAttempts = 100;
    let attempts = 0;

    while (questions.length < count && attempts < maxAttempts) {
      attempts++;
      const coefficient = Math.floor(Math.random() * 20) + 1; // Random coefficient for x
      const constant = Math.floor(Math.random() * 20) + 1; // Random constant
      const question = `If y = ${coefficient}x + ${constant}, Given x = ${multiplier}`;
      const answer = coefficient * multiplier + constant;

      questions.push({
        question,
        answer
      });
    }

    return questions;
  };

  return <Quiz type="algebra" generateQuestions={generateQuestions} userName={userName} />;
}

export default AlgebraQuiz; 