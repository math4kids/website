import React from 'react';
import Quiz from './Quiz';

function SubtractionQuiz() {
  const generateQuestions = (count, multiplier) => {
    const questions = [];
    const usedNumbers = new Set();
    const maxAttempts = 100;
    let attempts = 0;
    
    const actualCount = Math.min(count, multiplier);

    while (questions.length < actualCount && attempts < maxAttempts) {
      attempts++;
      const num2 = Math.floor(Math.random() * multiplier) + 1;
      
      if (usedNumbers.has(num2)) continue;
      
      usedNumbers.add(num2);
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