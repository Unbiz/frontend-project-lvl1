import readlineSynk from 'readline-sync';

const userName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSynk.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

export default userName;
