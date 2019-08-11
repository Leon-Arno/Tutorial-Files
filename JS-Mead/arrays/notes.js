const notes = ['Item 1', 'Item 2', 'Item 3'];
const notesObj = [
  {
    title: 'Johnny Bravo',
    body: 'Hey Baby!'
  },
  {
    title: 'Scooby Doo',
    body: `Let's go to the kitchen`
  },
  {
    title: 'Agu bu Egbe',
    body: 'Na meee!'
  }
];
// console.log(notes.length);
// console.log(notes[notes.length - 1]);

// * Adding & removing an item to/from the End of an array

notes.push('New item 4'); //add
notes.pop(); //remove

// * Adding & removing an item to/from the beginning of an array

notes.unshift('New First'); //Add
notes.shift(); // Remove

//  * Adding & removing an item to/from the  of an array

// notes.splice(1, 1); //remove
// notes.splice(1, 01, 'New item 2'); // add
notes[2] = 'New Note 3';

//* Looping through arrays

notes.forEach(function(item, index) {
  console.log(index);
  console.log(item);
});

console.log(notes);
console.log(notes.length);

// const emojis = ['😍', '🥰', '😅'];
// console.log(emojis);

// let age = 26
// age /= 2
// console.log(age)

const fruits = [
  { name: 'apple', color: 'red' },
  { name: 'strawberry', color: 'red' },
  { name: 'banana', color: 'yellow' },
  { name: 'pineapple', color: 'yellow' },
  { name: 'grape', color: 'purple' },
  { name: 'plum', color: 'purple' }
];

function test(color) {
  // use Array filter to find fruits in color

  return fruits.filter(f => f.color == color);
}
console.log(test(''));

for (let count = 0; count < notes.length; count++) {
  console.log(notes[count]);
}
for (let count = notes.length - 1; count >= 0; count--) {
  console.log(notes[count]);
}

// Searching array
console.log(notes.length);
console.log(notes.indexOf('Item 1'));
