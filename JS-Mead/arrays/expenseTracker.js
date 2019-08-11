const account = {
  name: 'Leon-Arno',
  expenses: [],
  income: [],
  addExpense: function(description, amount) {
    this.expenses.push({ description: description, amount: amount });
  },
  addIncome: function(description, amount) {
    this.income.push({ description: description, amount: amount });
  },
  getAccountSummary: function() {
    const expenseTotal = this.expenses.reduce(
      (acc, value) => acc + value.amount,
      0
    );

    const incomeTotal = this.income.reduce(
      (acc, value) => acc + value.amount,
      0
    );

    let balance = incomeTotal - expenseTotal;

    return `Leon-Arno has a balance of €${balance}. €${incomeTotal} in income. €${expenseTotal} in expenses`;
  }
};

account.addExpense('Pizza', 20);
account.addExpense('Spotify', 9.99);
account.addExpense('Veggies', 122);
account.addIncome('Job', 2000);
account.addIncome('Freelance', 1550);

//console.table(account.expenses);
console.log(account.getAccountSummary());
