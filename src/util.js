const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max - min + 1));
const isEven = (number) => number % 2 === 0;
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number === 3 || number === 2) {
    return true;
  }
  for (let divisor = 2; divisor <= Math.sqrt(number); divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};

export { getRandomNumber, isEven, isPrime };
