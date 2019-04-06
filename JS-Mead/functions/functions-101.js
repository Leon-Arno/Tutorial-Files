// Function = input, code, output.

let greetUser = function() {
  console.log('Welcome User!');
};

greetUser();
greetUser();

let square = function(num) {
  let result = num * num;
  return result;
};

let value = square(3);

console.log(value);

// Challenge

let temperature = function(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
};

let celsiusTemp = temperature(32);
let celsiusTemp2 = temperature(68);

console.log(celsiusTemp);
console.log(celsiusTemp2);
