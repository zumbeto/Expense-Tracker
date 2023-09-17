import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const handleAddNewExpense = (newExpenseData) => {
    const newExpense = {
      ...newExpenseData,
      id: 'e' + (expenses.length + 1),
    };
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
    console.log(newExpense); // testing purposes
  };

  return (
    <div className='App'>
      <NewExpense onAddNewExpense={handleAddNewExpense} />
      <Expenses expensesData={expenses} />
    </div>
  );
}

export default App;
