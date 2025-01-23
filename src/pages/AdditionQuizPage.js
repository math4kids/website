import React from 'react';
import SEO from '../components/common/SEO';
import AdditionQuiz from '../components/AdditionQuiz';

function AdditionQuizPage() {
  return (
    <>
      <SEO 
        title="Addition Practice - Math Games"
        description="Practice addition with our interactive quiz. Improve your addition skills with instant feedback and progress tracking."
        keywords="addition practice, math quiz, addition games, math practice, elementary math"
      />
      <AdditionQuiz />
    </>
  );
}

export default AdditionQuizPage; 