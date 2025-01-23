import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/Header.css';

function Header() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <header className="header">
      <Link to="/" className="logo">Math Quiz</Link>
      <nav>
        <Link to="/" className="nav-link">Quizzes</Link>
        <button 
          className="theme-toggle" 
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? '🌞' : '🌙'}
        </button>
      </nav>
    </header>
  );
}

export default Header; 