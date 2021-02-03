import readlineSynk from 'readline-sync';
import getUserName from './cli.js';

const startGame = (gameData, phrase) => {
  let countCorrectAnswer = 0;
  const userName = getUserName();
  console.log(phrase);

  while (countCorrectAnswer < 3) {
    const { question, correctAnswer } = gameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSynk.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      countCorrectAnswer += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }

  if (countCorrectAnswer === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default startGame;
