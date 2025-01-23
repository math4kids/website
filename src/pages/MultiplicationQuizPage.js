import React from 'react';
import SEO from '../components/common/SEO';
import MultiplicationQuiz from '../components/MultiplicationQuiz';

function MultiplicationQuizPage() {
  return (
    <>
      <SEO 
        title="Multiplication Practice - Math Games"
        description="Learn multiplication tables with our interactive quiz. Practice multiplication with fun exercises and instant feedback."
        keywords="multiplication practice, times tables, math quiz, multiplication games, elementary math"
      />
      <MultiplicationQuiz />
    </>
  );
}

export default MultiplicationQuizPage; 