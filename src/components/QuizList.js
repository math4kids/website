import { Link } from 'react-router-dom';
import '../styles/QuizList.css';

function QuizList() {
  const quizzes = [
    {
      id: 'multiplication',
      title: 'Multiplication Tables',
      description: 'Practice multiplication from 1 to 12'
    },
    {
      id: 'addition',
      title: 'Addition',
      description: 'Practice addition up to 12'
    },
    {
      id: 'subtraction',
      title: 'Subtraction',
      description: 'Practice subtraction with numbers up to 24'
    },
    {
      id: 'division',
      title: 'Division',
      description: 'Practice division with numbers up to 144'
    },
    {
      id: 'random-mix',
      title: 'Random Mix',
      description: 'Practice all operations randomly'
    },
    {
      id: 'algebra',
      title: 'Algebra',
      description: 'Practice solving algebraic equations'
    }
  ];

  return (
    <div className="quiz-list">
      <h1>Select Quiz Type</h1>
      <div className="quiz-grid">
        {quizzes.map(quiz => (
          <Link 
            key={quiz.id} 
            to={`/${quiz.id}`}
            className="quiz-card"
          >
            <h2>{quiz.title}</h2>
            <p>{quiz.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default QuizList; 