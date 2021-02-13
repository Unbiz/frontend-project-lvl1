import { getRandomNumber, isEven } from '../util.js';
import startGame from '../index.js';

const phrase = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = () => {
  const question = getRandomNumber(0, 99);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => startGame(even, phrase);
