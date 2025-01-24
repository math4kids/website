import React, { useState, useRef, useEffect } from 'react';
import VirtualKeyboard from './VirtualKeyboard';
import NameInput from './NameInput';
import '../styles/Quiz.css';
import QuizResults from './common/QuizResults';

function Quiz({ type, generateQuestions, userName }) {
  const [step, setStep] = useState('select');
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [name, setName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [startTime, setStartTime] = useState(Date.now());
  const [endTime, setEndTime] = useState(0);
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
  const [selectedMultiplier, setSelectedMultiplier] = useState(null);

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
    setStep('name');
  };

  const handleNameSubmit = (submittedName) => {
    setName(submittedName);
    setStep('multiplier');
  };

  const handleMultiplierSelect = (number) => {
    setSelectedMultiplier(number);
    setQuestions(generateQuestions(selectedNumber, number));
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
      setEndTime(Date.now());
      setStep('results');
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const renderQuestion = (question) => {
    if (type === 'algebra') {
      const [num1, num2] = question.question.split(',');
      return (
        <>
          <div>{num1.trim()}</div>
          <div>{num2.trim()}, What is the value of y?</div>
        </>
      );
    }
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
      case 'algebra':
          return 'Algebra Quiz';
      default:
        return 'Math Quiz';
    }
  };

  const handleQuizClick = () => {
    if (step === 'quiz' && answerInputRef.current) {
      answerInputRef.current.focus();
    }
  };

  const getResultsClass = (percentage) => {
    if (percentage === 100) return 'perfect';
    if (percentage >= 80) return 'good';
    return 'needs-practice';
  };

  const getResultsEmoji = (percentage) => {
    if (percentage === 100) {
      return '🎉 🌟 🎊 🏆';  // Celebration emojis
    }
    if (percentage >= 80) {
      return '👍 💪 ⭐';     // Good job emojis
    }
    return '😢 💪 📚';      // Encouragement emojis
  };

  const percentage = questions.length > 0 ? (totalCorrect / questions.length) * 100 : 0;
  const score = totalCorrect; // This is the total correct answers

  const totalTime = endTime - startTime; // in milliseconds
  const averageTimePerQuestion = totalTime / questions.length / 1000; // in seconds

  const handleTryAgain = () => {
    setStep('select');
    setCurrentQuestion(0);
    setAnswers([]);
    setTotalCorrect(0);
    setProgressColor('#2196F3');
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

      {step === 'results' && (() => {
        const backgroundColor = percentage === 100 ? 'green' : percentage < 80 ? 'lightgreen' : 'orange';

        return (
          <div className={`quiz-results`} style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#721c24' }}>Quiz Complete!</h2>
            <div className="result-emoji">
              {getResultsEmoji(percentage)}
            </div>
            
            {/* Wrap score, total time, and average time in a separate div */}
            <div style={{ backgroundColor, padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
              <div className="score-text" style={{ fontSize: '24px', color: '#721c24' }}>
                Score: {score} / {questions.length} ({percentage.toFixed(2)}%)
              </div>
              <div style={{ color: '#721c24' }}>
                Total Time: {(totalTime / 1000).toFixed(2)} seconds
              </div>
              <div style={{ color: '#721c24' }}>
                Average Time per Question: {averageTimePerQuestion.toFixed(2)} seconds
              </div>
            </div>
            
            {/* Box for Detailed Results */}
            <div style={{
              border: '1px solid #007bff',
              borderRadius: '8px',
              padding: '16px',
              backgroundColor: '#e7f1ff'
            }}>
              <h3 style={{ color: '#007bff' }}>Detailed Results:</h3>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {answers.map((answer, index) => {
                  const isCorrect = answer.userAnswer === answer.correctAnswer;
                  return (
                    <li key={index} style={{ color: isCorrect ? 'green' : 'red', margin: '10px 0' }}>
                      <strong>#{index + 1}</strong> {answer.question} = {answer.correctAnswer} 
                      {isCorrect ? (
                        <span style={{ color: 'green' }}> ✔ {answer.userAnswer}</span>
                      ) : (
                        <span style={{ color: 'red' }}> ✖ {answer.userAnswer}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            
            <button onClick={handleTryAgain} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>
              Try Again
            </button>
          </div>
        );
      })()}
    </div>
  );
}

export default Quiz; 