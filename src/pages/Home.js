import React from 'react';
import SEO from '../components/common/SEO';
import NameInput from '../components/NameInput';

function Home() {
  return (
    <>
      <SEO 
        title="Math Games - Fun Math Practice for Kids"
        description="Improve your math skills with our interactive math games. Practice addition, subtraction, multiplication, and division in a fun way!"
        keywords="math games, math practice, kids math, educational games, math quiz, arithmetic practice"
      />
      <NameInput />
    </>
  );
}

export default Home; 