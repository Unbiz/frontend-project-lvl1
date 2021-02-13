import readlineSynk from 'readline-sync';
import getUserName from './userName.js';
import gameCore from './gameCore.js';
import calcGame from './games/calc.js';
import evenGame from './games/even.js';
import gcdGame from './games/gcd.js';
import primeGame from './games/prime.js';
import progressionGame from './games/progression.js';

const gameListPhrase = `Please, select the game:\n\n1 - Calc\n2 - Even\n3 - Gcd\n4 - Prime\n5 - Progression\n\n0 - Exit\n`;
const gameList = {
  1: calcGame,
  2: evenGame,
  3: gcdGame,
  4: primeGame,
  5: progressionGame,
};

const startGame = () => {
  const userName = getUserName();
  let numberOfGame = 0;
  do {
    console.log(gameListPhrase);
    numberOfGame = readlineSynk.question('Press "1" - "5" (or "0" to exit): ');
    console.log('\n');
    if (numberOfGame !== '0') {
      gameCore(gameList[numberOfGame], userName);
    };
  } while (numberOfGame !== '0')
};

export default startGame;