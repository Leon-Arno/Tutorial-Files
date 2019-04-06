let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
};

let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723
};

const getSummary = book => {
  return {
    summary: `${book.title} by ${book.author}.`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
  };
  //   console.log(`${book.title} by ${book.author}`);
};
let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

//* Challenge

// let fahrenheit = 35;
// let celsius = ((fahrenheit - 32) * 5) / 9;

// let kelvin = ((fahrenheit + 459.67) * 5) / 9;

// console.log(kelvin);
// console.log(celsius);

const convertFahrenheit = fahrenheit => {
  return {
    fahrenheit: fahrenheit,
    celsius: ((fahrenheit - 32) * 5) / 9,
    kelvin: ((fahrenheit + 459.67) * 5) / 9
  };
};

let temperatures = convertFahrenheit(74);

console.log(temperatures);

const total = [1, 2, 3, 4, 5];

console.log(total.reduce((accumulator, index) => accumulator + index));
