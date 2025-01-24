import React from 'react';
import Quiz from './Quiz';

function RandomMixQuiz() {
  const generateQuestions = (count, multiplier) => {
    const questions = [];
    const usedCombinations = new Set();
    const maxAttempts = 100;
    let attempts = 0;
    
    const actualCount = Math.min(count, 48); // 12 numbers * 4 operations

    const operations = [
      {
        symbol: '+',
        generate: (num2) => ({
          question: `${multiplier} + ${num2}`,
          answer: multiplier + num2
        })
      },
      {
        symbol: '-',
        generate: (num2) => ({
          question: `${multiplier} - ${num2}`,
          answer: multiplier - num2
        })
      },
      {
        symbol: '×',
        generate: (num2) => ({
          question: `${multiplier} × ${num2}`,
          answer: multiplier * num2
        })
      },
      {
        symbol: '÷',
        generate: (num2) => {
          const dividend = multiplier * num2;
          return {
            question: `${dividend} ÷ ${multiplier}`,
            answer: num2
          };
        }
      }
    ];

    while (questions.length < actualCount && attempts < maxAttempts) {
      attempts++;
      const operation = operations[Math.floor(Math.random() * operations.length)];
      const num2 = Math.floor(Math.random() * 12) + 1;
      const combinationKey = `${operation.symbol}${num2}`;
      
      if (usedCombinations.has(combinationKey)) continue;
      
      usedCombinations.add(combinationKey);
      const question = operation.generate(num2);
      questions.push(question);
    }

    return questions;
  };

  return <Quiz type="random-mix" generateQuestions={generateQuestions} />;
}

export default RandomMixQuiz; 