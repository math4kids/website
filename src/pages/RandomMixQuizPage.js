import React from 'react';
import SEO from '../components/common/SEO';
import RandomMixQuiz from '../components/RandomMixQuiz';

function RandomMixQuizPage() {
  return (
    <>
      <SEO 
        title="Mixed Math Operations Practice - Math Games"
        description="Challenge yourself with mixed math operations. Practice addition, subtraction, multiplication, and division all in one quiz!"
        keywords="mixed math practice, math quiz, arithmetic practice, math games, elementary math"
      />
      <RandomMixQuiz />
    </>
  );
}

export default RandomMixQuizPage; 