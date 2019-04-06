let number = 20.21;
console.log(number.toFixed(0));

console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));

// * Random Numbers
let min = 40;
let max = 210;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

// ? Challenge

const guessNum = number => {
  let min = 1;
  let max = 5;

  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum);

  // if (number === randomNum) {
  //   console.log('Correct');
  //   return true;
  // } else if (number !== randomNum) {
  //   console.log('False');
  //   return false;
  // }

  return number === randomNum ? true : false;
};

console.log(guessNum(3));

//   const name = 'George';
//   const dogName = 'Billy';

//   const addNames = () => {
//     return name + dogName;
//   };

//   console.log(addNames());

// const removeNames = () => {
//   addNames = forgetNames()
// }
