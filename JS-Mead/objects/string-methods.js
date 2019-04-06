let name = ' Leon-Arno';

//* Length property
console.log(name.length);

// * Convert to uppercase
console.log(name.toUpperCase());

// * Convert to lowercase
console.log(name.toLowerCase());

//* Includes method

let password = '123abc22!!!';
console.log(password.includes('abc'));

// * Trim
console.log(name.trim());

//? Challenge

const isValidPassword = str => {
  // if (str.length > 8 && !str.includes('password' || 'abc')) {
  //   console.log('Password is Valid');
  // } else {
  //   console.log('Please create a stronger password');
  // }

  return str.length > 8 && !str.includes('password' || 'abc');
};

console.log(isValidPassword('abcpassword%$&'));
console.log(isValidPassword('Goaty@123'));
