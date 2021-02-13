import { getRandomNumber } from '../util.js';

const phrase = 'What number is missing in the progression?';

const game = () => {
  const progressionLength = 10;
  const progressionStartNumber = getRandomNumber(0, 99);
  const progressionNumber = getRandomNumber(0, 9);
  const hideNumberPosition = getRandomNumber(0, 9);

  const progressionArr = [progressionStartNumber];

  for (let i = 1; i < progressionLength; i += 1) {
    const number = progressionArr[i - 1] + progressionNumber;
    progressionArr.push(number);
  }

  const hideNumber = progressionArr[hideNumberPosition];
  progressionArr[hideNumberPosition] = '..';

  const question = progressionArr.join(' ');
  const correctAnswer = `${hideNumber}`;

  return { question, correctAnswer };
};

export default { game, phrase };
