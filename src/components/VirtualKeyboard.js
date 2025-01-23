import React from 'react';
import '../styles/VirtualKeyboard.css';

function VirtualKeyboard({ onKeyPress, onClear }) {
  const handleKeyPress = (value) => {
    console.log('Key pressed:', value); // Debug log
    if (value === 'clear') {
      onClear();
    } else {
      onKeyPress(value);
    }
  };

  return (
    <div className="virtual-keyboard">
      <div className="keyboard-row">
        <button onClick={() => handleKeyPress('1')}>1</button>
        <button onClick={() => handleKeyPress('2')}>2</button>
        <button onClick={() => handleKeyPress('3')}>3</button>
      </div>
      <div className="keyboard-row">
        <button onClick={() => handleKeyPress('4')}>4</button>
        <button onClick={() => handleKeyPress('5')}>5</button>
        <button onClick={() => handleKeyPress('6')}>6</button>
      </div>
      <div className="keyboard-row">
        <button onClick={() => handleKeyPress('7')}>7</button>
        <button onClick={() => handleKeyPress('8')}>8</button>
        <button onClick={() => handleKeyPress('9')}>9</button>
      </div>
      <div className="keyboard-row">
        <button onClick={() => handleKeyPress('0')}>0</button>
        <button 
          onClick={() => handleKeyPress('clear')}
          className="clear-btn"
        >
          CLEAR
        </button>
        <button 
          onClick={() => handleKeyPress('enter')}
          className="enter-btn"
        >
          ENTER
        </button>
      </div>
    </div>
  );
}

export default VirtualKeyboard; 