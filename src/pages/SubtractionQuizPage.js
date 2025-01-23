import React from 'react';
import SEO from '../components/common/SEO';
import SubtractionQuiz from '../components/SubtractionQuiz';

function SubtractionQuizPage() {
  return (
    <>
      <SEO 
        title="Subtraction Practice - Math Games"
        description="Master subtraction with our interactive quiz. Practice subtraction problems with immediate feedback and track your progress."
        keywords="subtraction practice, math quiz, subtraction games, math practice, elementary math"
      />
      <SubtractionQuiz />
    </>
  );
}

export default SubtractionQuizPage; 