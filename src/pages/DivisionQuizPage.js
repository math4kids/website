import React from 'react';
import SEO from '../components/common/SEO';
import DivisionQuiz from '../components/DivisionQuiz';

function DivisionQuizPage() {
  return (
    <>
      <SEO 
        title="Division Practice - Math Games"
        description="Practice division with our interactive quiz. Improve your division skills with step-by-step feedback and progress tracking."
        keywords="division practice, math quiz, division games, math practice, elementary math"
      />
      <DivisionQuiz />
    </>
  );
}

export default DivisionQuizPage; 