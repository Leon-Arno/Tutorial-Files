// const arrOfObj = [
//   { name: 'Leon-Arno' },
//   { name: 'Madara Uchiha', power: 'Rennigan' },
//   { name: 'Sasuke Uchiha' }
// ];

// const getItem = (arrOfObj, keyName) => {
//   const index = arrOfObj.findIndex((key, index) => {
//     console.log(key.name);
//     return key.name.toLowerCase() === keyName.toLowerCase();
//   });
//   return arrOfObj[index];
// };

// const item = getItem(arrOfObj, 'Madara Uchiha');
// console.log(item);

const toDo = [
  { text: 'Go to gym', completed: false },
  { text: 'Prepare for workshop', completed: true },
  { text: 'Wash dishes', completed: false },
  { text: 'Drink tea', completed: true }
];

// const deleteToDo = (toDo, theToDo) => {
//   const index = toDo.findIndex(todo => {
//     return todo.text.toLowerCase() === theToDo.toLowerCase();
//   });
//   return index > -1 ? toDo.pop(index) : 'Not found';
// };

// deleteToDo(toDo, 'Drink tea');
// console.log(toDo);

const unDoneToDos = toDo => {
  return toDo.filter(todo => todo.completed === false);
};

// console.log(unDoneToDos(toDo));

const sortToDos = toDo => {
  toDo.sort((todoPrev, todoNext) => {
    if ((todoPrev.completed === false && todoNext.completed) === true) {
      return -1;
    } else if ((todoNext.completed === true && todoPrev.completed) === false) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortToDos(toDo);
console.log(toDo);

// const sortToDos = toDo => {
//   toDo.sort((todoPrev, todoNext) => {
//     if (todoPrev.completed < todoNext.completed) {
//       return 1;
//     } else if (todoNext.completed < todoPrev.completed) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
// };

// sortToDos(toDo);
// console.log(toDo);
