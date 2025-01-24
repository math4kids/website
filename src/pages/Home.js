import React from 'react';
import SEO from '../components/common/SEO';
import NameInput from '../components/NameInput';
import QuizList from '../components/QuizList';

function Home() {
  return (
    <>
      <SEO 
        title="Math Games - Fun Math Practice for Kids"
        description="Improve your math skills with our interactive math games. Practice addition, subtraction, multiplication, division, and algebra in a fun way!"
        keywords="math games, math practice, kids math, educational games, math quiz, arithmetic practice, algebra practice"
      />
      <NameInput />
      <h1>Welcome to Math Games!</h1>
      <p>Choose a quiz to start practicing:</p>
      <QuizList />
    </>
  );
}

export default Home; 