let temp = 40;

if (temp >= 60 && temp <= 90) {
  console.log("It's nice outside");
} else if (temp <= 0 || temp >= 120) {
  console.log("Don't go outside");
} else {
  console.log("It's hot");
}

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('We have salad, grass, and some other green stuff.');
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log(' We have a lot of greens');
} else {
  console.log('Take a look at our other items.');
}
