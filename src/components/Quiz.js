import React, { useState, useRef, useEffect } from 'react';
import VirtualKeyboard from './VirtualKeyboard';
import NameInput from './NameInput';
import '../styles/Quiz.css';
import QuizResults from './common/QuizResults';

function Quiz({ type, generateQuestions }) {
  const [step, setStep] = useState('select');
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [name, setName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [streak, setStreak] = useState(0);
  const [currentInput, setCurrentInput] = useState('');
  const answerInputRef = useRef(null);
  const [quizTime, setQuizTime] = useState(0);
  const timerRef = useRef(null);
  const [progressColor, setProgressColor] = useState('#2196F3');
  const [totalCorrect, setTotalCorrect] = useState(0);

  useEffect(() => {
    if (step === 'quiz') {
      const startTime = Date.now();
      timerRef.current = setInterval(() => {
        const currentTime = Date.now();
        const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
        setQuizTime(elapsedSeconds);
      }, 100);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [step]);

  useEffect(() => {
    if (step === 'quiz' && answerInputRef.current) {
      answerInputRef.current.focus();
    }
  }, [step]);

  useEffect(() => {
    if (step === 'quiz' && answerInputRef.current) {
      answerInputRef.current.focus();
    }
  }, [currentQuestion]);

  const handleKeyDown = (e) => {
    if (showFeedback) return;

    if ((e.key >= '0' && e.key <= '9') || e.key === 'Enter') {
      e.preventDefault();
    }

    if (e.key === 'Enter') {
      handleVirtualKeyPress('enter');
    } else if (e.key === 'Backspace') {
      setCurrentInput(prev => prev.slice(0, -1));
    } else if (/^[0-9]$/.test(e.key)) {
      setCurrentInput(prev => prev + e.key);
    }
  };

  const handleVirtualKeyPress = (key) => {
    if (showFeedback) return;

    if (key === 'enter') {
      if (currentInput) {
        handleAnswer(currentInput);
      }
    } else {
      setCurrentInput(prev => prev + key);
    }
  };

  const handleNumberSelect = (number) => {
    setSelectedNumber(number);
    setQuestions(generateQuestions(number));
    setStep('name');
  };

  const handleNameSubmit = (submittedName) => {
    setName(submittedName);
    setStep('multiplier');
  };

  const handleMultiplierSelect = (number) => {
    setSelectedNumber(number);
    setQuestions(generateQuestions(number));
    setStep('quiz');
    setStartTime(new Date());
  };

  const handleAnswer = (userAnswer) => {
    if (!userAnswer) return;

    const currentQ = questions[currentQuestion];
    const correct = parseInt(userAnswer) === currentQ.answer;
    
    setIsCorrect(correct);
    if (correct) {
      setTotalCorrect(prev => prev + 1);
      setProgressColor('#4CAF50');
    } else {
      setProgressColor('#F44336');
    }

    setTimeout(() => {
      setProgressColor('#2196F3');
    }, 1000);

    setAnswers([...answers, {
      question: currentQ.question,
      userAnswer: parseInt(userAnswer),
      correctAnswer: currentQ.answer,
      timeTaken: quizTime
    }]);

    setCurrentInput('');
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      setStep('results');
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const renderQuestion = (question) => {
    const [num1, num2] = question.question.split(/[\+\-×÷]/);
    const operator = question.question.match(/[\+\-×÷]/)[0];
    
    return (
      <>
        <div>{num1.trim()}</div>
        <div>{operator} {num2.trim()}</div>
      </>
    );
  };

  const getQuizTitle = () => {
    switch (type) {
      case 'addition':
        return 'Addition Quiz';
      case 'subtraction':
        return 'Subtraction Quiz';
      case 'multiplication':
        return 'Multiplication Quiz';
      case 'division':
        return 'Division Quiz';
      case 'random-mix':
        return 'Mixed Operations Quiz';
      default:
        return 'Math Quiz';
    }
  };

  const handleQuizClick = () => {
    if (step === 'quiz' && answerInputRef.current) {
      answerInputRef.current.focus();
    }
  };

  return (
    <div className={`quiz ${type}-quiz`} onClick={handleQuizClick}>
      {step === 'select' && (
        <div className="number-select">
          <h1 className="quiz-title">{getQuizTitle()}</h1>
          <h2>How many questions would you like?</h2>
          <div className="number-grid">
            {[5, 10, 15, 20].map(number => (
              <button
                key={number}
                onClick={() => handleNumberSelect(number)}
                className="number-button"
              >
                {number}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 'name' && (
        <NameInput onComplete={handleNameSubmit} />
      )}

      {step === 'multiplier' && (
        <div className="number-select">
          <h2>Select a number to practice</h2>
          <div className="number-grid">
            {[...Array(12)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handleMultiplierSelect(index + 1)}
                className="number-button"
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 'quiz' && questions.length > 0 && (
        <div className="quiz-question">
          <div className="quiz-header">
            <div className="timer">Time: {formatTime(quizTime)}</div>
            <div className="progress-wrapper">
              <div className="progress-text">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span className="streak-count">
                  Correct: {totalCorrect}
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ 
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                    background: progressColor
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="question-container">
            <div className="question">
              {renderQuestion(questions[currentQuestion])}
              <div className="question-line"></div>
            </div>
            <input
              ref={answerInputRef}
              type="text"
              inputMode="none"
              className="answer-input"
              value={currentInput}
              onChange={() => {}}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          </div>
          <VirtualKeyboard 
            onKeyPress={handleVirtualKeyPress}
            onClear={() => setCurrentInput('')}
          />
        </div>
      )}

      {step === 'results' && (
        <QuizResults
          answers={answers}
          totalTime={quizTime}
          onRestart={() => window.location.reload()}
        />
      )}
    </div>
  );
}

export default Quiz; 