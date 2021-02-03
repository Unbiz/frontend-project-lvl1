import { getRandomNumber } from '../util.js';
import startGame from '../index.js';

const phrase = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => {
  if (y > x) return getGcd(y, x);
  if (y === 0) return x;
  return getGcd(y, x % y);
};

const gcd = () => {
  const numberOne = getRandomNumber(0, 99);
  const numberTwo = getRandomNumber(0, 99);
  const question = `${numberOne} ${numberTwo}`;
  const gcdNumber = getGcd(numberOne, numberTwo);
  const correctAnswer = `${gcdNumber}`;

  return { question, correctAnswer };
};

export default () => startGame(gcd, phrase);
