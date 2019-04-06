let isAccountLocked = false;
let userRole = 'admin';

// if (isAccountLocked) {
//   console.log('Account is locked.');
// } else {
//   console.log('Welcome!');
// }

if (isAccountLocked) {
  console.log('Account is locked.');
} else if (userRole === 'admin') {
  console.log('Welcome Admin!');
} else {
  console.log('Welcome!');
}

let temp = 45;

if (temp <= 31) {
  console.log("It's freezing outside!");
} else if (temp >= 100) {
  console.log("It's hot outside!");
} else {
  console.log("It's nice outside.");
}
