import React from 'react';
import { useUser } from '../context/UserContext';
import '../styles/NameInput.css';

function NameInput({ onComplete }) {
  const { recentUsers, addUser } = useUser();
  const [name, setName] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addUser(name.trim());
      onComplete(name.trim());
    }
  };

  const handleSelectUser = (selectedName) => {
    addUser(selectedName); // This will move the name to the top of the list
    onComplete(selectedName);
  };

  return (
    <div className="name-input-container">
      <h2>Enter Your Name</h2>
      <form onSubmit={handleSubmit} className="name-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="name-input"
          required
        />
        <button type="submit" className="submit-button">Start Quiz</button>
      </form>
      {recentUsers.length > 0 && (
        <div className="recent-users">
          <h3>Recent Players</h3>
          <div className="users-list">
            {recentUsers.map((user, index) => (
              <button
                key={index}
                onClick={() => handleSelectUser(user)}
                className="user-button"
              >
                {user}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NameInput; 