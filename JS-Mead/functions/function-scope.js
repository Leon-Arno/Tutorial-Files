// * Global scope
// Local scope
// Sub-local scope

let temperature = function(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  if (celsius <= 0) {
    let isFreezing = true;
    // return isFreezing;
  }
  return celsius;
};

let celsiusTemp = temperature(32);
let celsiusTemp2 = temperature(68);

console.log(celsiusTemp);
console.log(celsiusTemp2);
