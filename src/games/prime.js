import { getRandomNumber } from '../util.js';
import startGame from '../index.js';

const phrase = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  if (number === 3 || number === 2) {
    return true;
  }
  for (let divisor = 2; divisor <= Math.sqrt(number); divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
}

const progression = () => {
  const question = getRandomNumber(0, 99);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => startGame(progression, phrase);
