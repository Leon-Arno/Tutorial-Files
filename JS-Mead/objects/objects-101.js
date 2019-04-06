let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);

// * Challenge

let profile = {
  person: 'Leon',
  age: 20,
  location: 'Berlin'
};

console.log(
  `${profile.person} is ${profile.age} and lives in ${profile.location}`
);

// profile.age = 21;
//or
// profile.age = profile.age + 1

console.log(
  `${profile.person} is ${profile.age + 1} and lives in ${profile.location}`
);
