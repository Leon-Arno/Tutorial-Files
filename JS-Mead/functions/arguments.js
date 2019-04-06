//Multiple arguments
let add = function(apple, beans, cake) {
  return apple + beans + cake;
};

let result = add(5, 8, 9);
console.log(result);

//Default arguments
let getScoreText = function(name = 'Anonymous', score = 0) {
  // console.log(name);
  // console.log(score);
  return `Name: ${name} got a score of ${score}`;
};

let scoreText = getScoreText(undefined, 100);
console.log(scoreText);

// * Challenge

const tipWaitress = (bill, tipPercent) => {
  // return `Tip ${(tipPercent / bill) * 100}`;
  return `A ${tipPercent}% tip of $${bill} would be $${Math.ceil(
    (tipPercent / bill) * 100
  )}.`;
};
console.log(tipWaitress(100, 20));
console.log(tipWaitress(86, 15));
console.log(tipWaitress(47, 7));
