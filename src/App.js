import React, { useState, useEffect } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

// const dummyExpenses = [
//   {
//     id: 'e1',
//     title: 'Toilet Paper',
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
//   {
//     id: 'e3',
//     title: 'Car Insurance',
//     amount: 294.67,
//     date: new Date(2023, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: 'New Desk (Wooden)',
//     amount: 450,
//     date: new Date(2023, 5, 12),
//   },
// ];

const fetchDataFromLocalStorage = () => {
  const storedExpenses = localStorage.getItem('expenses');
  if (!storedExpenses) return [];

  const parsedExpenses = JSON.parse(storedExpenses);
  return parsedExpenses.map((expense) => {
    return {
      ...expense,
      date: new Date(expense.date),
    };
  });
};

const saveDataToLocalStorage = (expenses) => {
  localStorage.setItem('expenses', JSON.stringify(expenses));
};

function App() {
  const [expenses, setExpenses] = useState(fetchDataFromLocalStorage());

  const handleAddNewExpense = (newExpenseData) => {
    const newExpense = {
      ...newExpenseData,
      id: 'e' + (expenses.length + 1),
    };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const handleDeleteExpense = (expenseId) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== expenseId));
  };

  useEffect(() => {
    saveDataToLocalStorage(expenses);
  }, [expenses]);

  return (
    <div className='App'>
      <NewExpense onAddNewExpense={handleAddNewExpense} />
      <Expenses
        expensesData={expenses}
        onDeleteExpense={handleDeleteExpense}
      />
    </div>
  );
}

export default App;
