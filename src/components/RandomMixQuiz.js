import React from 'react';
import Quiz from './Quiz';

function RandomMixQuiz() {
  const generateQuestions = (count) => {
    const questions = [];
    const operations = [
      {
        symbol: '+',
        generate: () => {
          const num1 = Math.floor(Math.random() * 100) + 1;
          const num2 = Math.floor(Math.random() * 100) + 1;
          return { question: `${num1} + ${num2}`, answer: num1 + num2 };
        }
      },
      {
        symbol: '-',
        generate: () => {
          const num1 = Math.floor(Math.random() * 100) + 1;
          const num2 = Math.floor(Math.random() * num1) + 1;
          return { question: `${num1} - ${num2}`, answer: num1 - num2 };
        }
      },
      {
        symbol: '×',
        generate: () => {
          const num1 = Math.floor(Math.random() * 12) + 1;
          const num2 = Math.floor(Math.random() * 12) + 1;
          return { question: `${num1} × ${num2}`, answer: num1 * num2 };
        }
      },
      {
        symbol: '÷',
        generate: () => {
          const divisor = Math.floor(Math.random() * 12) + 1;
          const quotient = Math.floor(Math.random() * 12) + 1;
          const dividend = divisor * quotient;
          return { question: `${dividend} ÷ ${divisor}`, answer: quotient };
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