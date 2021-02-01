import readlineSynk from 'readline-sync';

console.log("Welcome to the Brain Games!");
const name = readlineSynk.question('May I have your name? ');
console.log("Hi " + name + "!");

export default name;