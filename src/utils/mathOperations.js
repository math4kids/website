export const operations = {
  addition: {
    symbol: '+',
    generate: () => {
      const num1 = Math.floor(Math.random() * 100) + 1;
      const num2 = Math.floor(Math.random() * 100) + 1;
      return { num1, num2, answer: num1 + num2 };
    },
    format: (num1, num2) => `${num1} + ${num2}`
  },
  subtraction: {
    symbol: '-',
    generate: () => {
      const num1 = Math.floor(Math.random() * 100) + 1;
      const num2 = Math.floor(Math.random() * num1) + 1;
      return { num1, num2, answer: num1 - num2 };
    },
    format: (num1, num2) => `${num1} - ${num2}`
  },
  multiplication: {
    symbol: '×',
    generate: () => {
      const num1 = Math.floor(Math.random() * 12) + 1;
      const num2 = Math.floor(Math.random() * 12) + 1;
      return { num1, num2, answer: num1 * num2 };
    },
    format: (num1, num2) => `${num1} × ${num2}`
  },
  division: {
    symbol: '÷',
    generate: () => {
      const divisor = Math.floor(Math.random() * 12) + 1;
      const quotient = Math.floor(Math.random() * 12) + 1;
      const dividend = divisor * quotient;
      return { num1: dividend, num2: divisor, answer: quotient };
    },
    format: (num1, num2) => `${num1} ÷ ${num2}`
  }
};

export const generateQuestions = (type, count) => {
  const questions = [];
  const operation = operations[type];

  if (type === 'random-mix') {
    const operationTypes = Object.keys(operations).filter(op => op !== 'random-mix');
    for (let i = 0; i < count; i++) {
      const randomType = operationTypes[Math.floor(Math.random() * operationTypes.length)];
      const { num1, num2, answer } = operations[randomType].generate();
      questions.push({
        question: operations[randomType].format(num1, num2),
        answer,
        type: randomType
      });
    }
  } else {
    for (let i = 0; i < count; i++) {
      const { num1, num2, answer } = operation.generate();
      questions.push({
        question: operation.format(num1, num2),
        answer,
        type
      });
    }
  }

  return questions;
}; 