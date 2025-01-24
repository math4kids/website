import React from 'react';
import Quiz from './Quiz';

function RandomMixQuiz() {
  const generateQuestions = (count, multiplier) => {
    const questions = [];
    const operations = [
      {
        symbol: '+',
        generate: () => {
          const num2 = Math.floor(Math.random() * 12) + 1;
          return { question: `${multiplier} + ${num2}`, answer: multiplier + num2 };
        }
      },
      {
        symbol: '-',
        generate: () => {
          const num2 = Math.floor(Math.random() * multiplier) + 1;
          return { question: `${multiplier} - ${num2}`, answer: multiplier - num2 };
        }
      },
      {
        symbol: '×',
        generate: () => {
          const num2 = Math.floor(Math.random() * 12) + 1;
          return { question: `${multiplier} × ${num2}`, answer: multiplier * num2 };
        }
      },
      {
        symbol: '÷',
        generate: () => {
          const num2 = Math.floor(Math.random() * 12) + 1;
          const dividend = multiplier * num2;
          return { question: `${dividend} ÷ ${multiplier}`, answer: num2 };
        }
      }
    ];

    for (let i = 0; i < count; i++) {
      const operation = operations[Math.floor(Math.random() * operations.length)];
      questions.push(operation.generate());
    }

    return questions;
  };

  return <Quiz type="random-mix" generateQuestions={generateQuestions} />;
}

export default RandomMixQuiz; 