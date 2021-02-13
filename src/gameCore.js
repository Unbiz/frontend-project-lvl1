import readlineSynk from 'readline-sync';
import getUserName from './userName.js';

const gameCore = (gameData, userName = getUserName()) => {
  let countCorrectAnswer = 0;
  const { phrase } = gameData;
  console.log(`${phrase}\n`);

  while (countCorrectAnswer < 3) {
    const { correctAnswer, question } = gameData.game();
    console.log(`Question: ${question}\n`);
    const userAnswer = readlineSynk.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!\n');
      countCorrectAnswer += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n`);
      console.log(`Let's try again, ${userName}!\n`);
      break;
    }
  }

  if (countCorrectAnswer === 3) {
    console.log(`Congratulations, ${userName}!\n`);
  }
};

export default gameCore;
