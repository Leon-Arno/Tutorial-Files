// const toDos = [
//   'Hello',
//   'Give thanks to God',
//   'Make money',
//   'Chop money',
//   'ETA Umu Berlin',
//   'Aggressive Eroberung des Spiels'
// ];

// console.log(`De Leon, you have ${toDos.length} to-do's for the day`);
// // console.log(`They are: ${toDos[0]} and ${toDos[toDos.length - 1]}`);

// //* Deletes 3rd item
// toDos.splice(2, 1);

// //* New item at the end
// toDos.push('Chigoziem');

// //* remove first item
// toDos.shift();

// console.log("Your remaining to-do's");
// toDos.forEach(function(item, index) {
//   const sum = index + 1;
//   console.log(`${sum}. ${item}`);
//   // console.log(
//   //   `The first item in your to-Do is ${toDos[0]} and the second is ${toDos[1]}`
//   // );
// });

// console.log(toDos);

// ? For Loop
/** 3  Args  provided
 * *1. Initializer
 * *2. Condition
 * *3. Final expression
 */
// for (let count = 0; count <= 2; count++) {
//   console.log(count);
// }

// for (let count = 0; count < toDos.length; count++) {
//   const num = count + 1;
//   console.log(`${num} ${toDos[count]}`);
// }

// Searching array
const toDosObj = [
  {
    title: 'Johnny Bravo',
    body: 'Hey Baby!'
  },
  {
    title: 'scooby Doo',
    body: "Let's go to the kitchen!"
  },
  {
    title: 'Agu bu Egbe',
    body: 'Na meee!'
  }
];

//? findIndex()
// const findToDo = (toDosObj, toDoTitle) => {
//   const index = toDosObj.findIndex((todo, index) => {
//     return todo.title.toLowerCase() === toDoTitle.toLowerCase();
//   });
//   return toDosObj[index];
// };

// const todo = findToDo(toDosObj, 'Scooby Doo');
// console.log(todo);

// console.log(toDosObj.length);
// console.log(toDosObj);

// const index = toDosObj.findIndex((toDo, index) => {
//   console.log(toDo);
//   return toDo.title === 'Johnny Bravo';
// });
// console.log(index);

//? find()
const findToDo = (toDosObj, toDoTitle) => {
  return toDosObj.find((toDo, index) => {
    return toDo.title.toLowerCase() === toDoTitle.toLowerCase();
  });
};

const todo = findToDo(toDosObj, 'Scooby Doo');
console.log(todo);
