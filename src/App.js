import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import QuizList from './components/QuizList';
import MultiplicationQuiz from './components/MultiplicationQuiz';
import AdditionQuiz from './components/AdditionQuiz';
import SubtractionQuiz from './components/SubtractionQuiz';
import DivisionQuiz from './components/DivisionQuiz';
import RandomMixQuiz from './components/RandomMixQuiz';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <div className="app">
            <Header />
            <Routes>
              <Route path="/" element={<QuizList />} />
              <Route path="/multiplication" element={<MultiplicationQuiz />} />
              <Route path="/addition" element={<AdditionQuiz />} />
              <Route path="/subtraction" element={<SubtractionQuiz />} />
              <Route path="/division" element={<DivisionQuiz />} />
              <Route path="/random-mix" element={<RandomMixQuiz />} />
            </Routes>
          </div>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App; 