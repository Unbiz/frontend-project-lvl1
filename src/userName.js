import readlineSynk from 'readline-sync';

const getUserName = () => {
  console.log('\nWelcome to the Brain Games!');
  const name = readlineSynk.question('\nMay I have your name? ');
  console.log(`\nHello, ${name}!\n`);

  return name;
};

export default getUserName;
