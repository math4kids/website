import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import AlgebraQuiz from '../components/AlgebraQuiz'; // The quiz logic component

function AlgebraQuizPage() {
  return (
    <>
      <SEO 
        title="Algebra Practice - Math Games"
        description="Practice algebra with our interactive quiz. Improve your algebra skills with instant feedback and progress tracking."
        keywords="algebra practice, math quiz, algebra games, math practice, elementary math"
      />
      <AlgebraQuiz />
    </>
  );
}

export default AlgebraQuizPage; 