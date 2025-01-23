import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Button } from './Button';

const ResultsContainer = styled.div`
  text-align: center;
  margin: ${theme.spacing.lg} 0;
`;

const Summary = styled.div`
  margin-bottom: ${theme.spacing.lg};
  font-size: 1.2em;
  color: ${theme.colors.text};

  h2, h3 {
    color: ${theme.colors.text};
  }
`;

const AnswersList = styled.div`
  margin: ${theme.spacing.lg} 0;
  text-align: left;
`;

const AnswerItem = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 180px;
  align-items: center;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.md};
  margin: ${theme.spacing.sm} 0;
  background-color: ${theme.colors.cardBackground};
  border-radius: ${theme.borderRadius.md};
  border-left: 4px solid ${props => 
    props.isCorrect ? theme.colors.success : theme.colors.error};
  color: ${theme.colors.text};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const QuestionNumber = styled.span`
  font-weight: bold;
  color: ${theme.colors.text};
`;

const Question = styled.span`
  font-family: monospace;
  font-size: 1.1em;
  color: ${theme.colors.text};
`;

const Answer = styled.div`
  text-align: right;
  white-space: nowrap;
`;

const UserAnswer = styled.span`
  color: ${props => props.isCorrect ? '#2E7D32' : '#C62828'};
  font-weight: bold;
  margin-right: ${theme.spacing.sm};
`;

const CorrectAnswer = styled.span`
  color: #2E7D32;
  font-size: 0.9em;
  font-weight: bold;
`;

const TimeStats = styled.div`
  margin: ${theme.spacing.md} 0;
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.cardBackground};
  border-radius: ${theme.borderRadius.md};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const QuizResults = ({ answers, totalTime, onRestart }) => {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const correctAnswers = answers.filter(a => a.userAnswer === a.correctAnswer);
  const accuracy = Math.round((correctAnswers.length / answers.length) * 100);
  const averageTimePerQuestion = Math.round(totalTime / answers.length);

  return (
    <ResultsContainer>
      <h2>Quiz Complete! 🎉</h2>
      
      <Summary>
        <TimeStats>
          <p>Total Time: {formatTime(totalTime)}</p>
          <p>Average Time per Question: {averageTimePerQuestion} seconds</p>
          <p>Score: {correctAnswers.length} / {answers.length} ({accuracy}%)</p>
        </TimeStats>
      </Summary>

      <AnswersList>
        <h3>Detailed Results:</h3>
        {answers.map((answer, index) => {
          const isCorrect = answer.userAnswer === answer.correctAnswer;
          return (
            <AnswerItem key={index} isCorrect={isCorrect}>
              <QuestionNumber>#{index + 1}</QuestionNumber>
              <Question>{answer.question} = {answer.correctAnswer}</Question>
              <Answer>
                {isCorrect ? (
                  <UserAnswer isCorrect={true}>✓ {answer.userAnswer}</UserAnswer>
                ) : (
                  <UserAnswer isCorrect={false}>✗ {answer.userAnswer}</UserAnswer>
                )}
              </Answer>
            </AnswerItem>
          );
        })}
      </AnswersList>

      <Button onClick={onRestart} variant="primary" size="large">
        Try Again
      </Button>
    </ResultsContainer>
  );
};

export default QuizResults; 