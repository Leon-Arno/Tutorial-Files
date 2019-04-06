let myAccount = {
  name: 'Leon-Arno',
  expenses: 0,
  income: 0
};

const addExpense = (account, amount) => {
  account.expenses += amount;
};
addExpense(myAccount, 1.5);
console.log(myAccount);

let addIncome = (account, income) => {
  account.income += income;
};

let resetAccount = account => {
  account.expenses = 0;
  account.income = 0;
};

let accountSummary = account => {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}. $${
    account.income
  } in income and $${account.expenses} in expenses`;
};

addIncome(myAccount, 5000);
addExpense(myAccount, 135);
addExpense(myAccount, 13);
console.log(accountSummary(myAccount));
resetAccount(myAccount);
console.log(accountSummary(myAccount));

const second = () => {
  console.log('Hello there!');
};

const first = () => {
  console.log('Hi there!');
  second();
  console.log('The End');
};

first();

const myString = 'Hello';

const popStr = arr => {
  let newString = arr
    .split('')
    .reverse()
    .join('');
  return newString;
  console.log(newString);
};

console.log(popStr(myString));

const networkRequest = () => {
  setTimeout(() => {
    console.log('Async Code');
  }, 2000);
};

console.log('Hello World');

networkRequest();

console.log('The End');

const arr = [1, 2, 3, 4, 5];

const newArr = [...arr];
newArr.push(6);
console.log(arr);
console.log(newArr);
