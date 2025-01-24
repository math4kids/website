import React from 'react';
import NameInput from './NameInput'; // Assuming you have a NameInput component

function QuizSetup({ questionCount, setQuestionCount, userName, setUserName, onStartQuiz }) {
  return (
    <div className="quiz-setup">
      <h1>Quiz Setup</h1>
      <div className="question-count">
        <label>
          How many questions would you like?
          <input 
            type="number" 
            min="1" 
            max="20" 
            value={questionCount} 
            onChange={(e) => setQuestionCount(e.target.value)} 
            className="question-input"
          />
        </label>
      </div>
      <NameInput onComplete={setUserName} />
      <button onClick={onStartQuiz} className="start-quiz-button">Start Quiz</button>
    </div>
  );
}

export default QuizSetup; 