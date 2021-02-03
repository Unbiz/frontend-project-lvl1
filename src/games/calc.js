import { getRandomNumber } from '../util.js';
import startGame from '../index.js';

const phrase = 'What is the result of the expression?';

const calc = () => {
  const numberOne = getRandomNumber(0, 99);
  const numberTwo = getRandomNumber(0, 99);
  let question = '';
  let correctAnswer = null;

  const typeOfOperation = getRandomNumber(0, 2);

  switch (typeOfOperation) {
    case 0:
      question = `${numberOne} + ${numberTwo}`;
      correctAnswer = `${numberOne + numberTwo}`;
      break;
    case 1:
      question = `${numberOne} - ${numberTwo}`;
      correctAnswer = `${numberOne - numberTwo}`;
      break;
    case 2:
      question = `${numberOne} * ${numberTwo}`;
      correctAnswer = `${numberOne * numberTwo}`;
      break;
    default:
      break;
  }

  return { question, correctAnswer };
};

export default () => startGame(calc, phrase);
