const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max - min + 1));
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

export { getRandomNumber, isEven };
