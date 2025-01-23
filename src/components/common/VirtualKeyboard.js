import React, { useState } from 'react';
import '../styles/VirtualKeyboard.css';

function VirtualKeyboard({ onKeyPress, onClear }) {
  const [activeKey, setActiveKey] = useState(null);

  const handleKeyClick = (key) => {
    setActiveKey(key);
    onKeyPress(key);
    
    // Reset active state after animation
    setTimeout(() => {
      setActiveKey(null);
    }, 100);
  };

  const keyboardLayout = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['0', 'clear', 'enter']
  ];

  return (
    <div className="virtual-keyboard">
      {keyboardLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <button
              key={key}
              className={`keyboard-key ${activeKey === key ? 'active' : ''} ${key === 'clear' || key === 'enter' ? 'special-key' : ''}`}
              onClick={() => {
                if (key === 'clear') {
                  onClear();
                } else {
                  handleKeyClick(key);
                }
              }}
            >
              {key === 'clear' ? '⌫' : 
               key === 'enter' ? '⏎' : key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default VirtualKeyboard; 