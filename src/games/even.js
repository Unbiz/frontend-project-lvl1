import readlineSynk from 'readline-sync';
import userName from '../cli.js';

const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const even = () => {
  const phrase = 'Answer "yes" if the number is even, otherwise answer "no".';
  let countCorrectAnswer = 0;

  const name = userName();
  console.log(phrase);

  while (countCorrectAnswer < 3) {
    const number = getRandomNumber(0, 99);
    console.log(`Question: ${number}`);
    const answer = readlineSynk.question('Your answer: ');
    const correctAnswer = isEven(number);
    if (answer === correctAnswer) {
      console.log('Correct!');
      countCorrectAnswer += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (countCorrectAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default even;
