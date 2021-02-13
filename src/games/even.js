import { getRandomNumber, isEven } from '../util.js';

const phrase = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  const question = getRandomNumber(0, 99);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default { game, phrase };
