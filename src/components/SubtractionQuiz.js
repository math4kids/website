import React from 'react';
import Quiz from './Quiz';

function SubtractionQuiz() {
  const generateQuestions = (count, multiplier) => {
    const questions = [];
    const usedNumbers = new Set();
    const maxAttempts = 100;
    let attempts = 0;

    // Limit count to available unique combinations (1-12)
    const actualCount = Math.min(count, 12);
    // Generate questions based on the selected multiplier
    while (questions.length < actualCount && attempts < maxAttempts) {
      attempts++;
      let temp = Math.floor(Math.random() * 12) + 1; // Random number for subtraction
      let num2 = Math.min(multiplier, temp);
      multiplier = Math.max(multiplier, temp);
      // Ensure unique questions
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