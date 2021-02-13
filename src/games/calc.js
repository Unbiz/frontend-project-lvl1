import { getRandomNumber } from '../util.js';

const phrase = 'What is the result of the expression?';

const typeList = {
  0: {
    operator: '+',
    fn: (numberOne, numberTwo) => numberOne + numberTwo,
  },
  1: {
    operator: '-',
    fn: (numberOne, numberTwo) => numberOne - numberTwo,
  },
  2: {
    operator: '*',
    fn: (numberOne, numberTwo) => numberOne * numberTwo,
  },
};

const game = () => {
  const numberOne = getRandomNumber(0, 99);
  const numberTwo = getRandomNumber(0, 99);
  const typeOfOperation = getRandomNumber(0, 2);

  const question = `${numberOne} ${typeList[typeOfOperation].operator} ${numberTwo}`;
  const correctAnswer = `${typeList[typeOfOperation].fn(numberOne, numberTwo)}`;

  return { question, correctAnswer };
};

export default { game, phrase };
