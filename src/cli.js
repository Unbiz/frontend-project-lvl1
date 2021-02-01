import readlineSynk from 'readline-sync';

function cli() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSynk.question('May I have your name? ');
  console.log(`Hi ${name} !`);
}

export default cli;
