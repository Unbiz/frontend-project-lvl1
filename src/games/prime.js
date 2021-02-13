import { getRandomNumber, isPrime } from '../util.js';

const phrase = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const game = () => {
  const question = getRandomNumber(0, 99);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default { game, phrase };
