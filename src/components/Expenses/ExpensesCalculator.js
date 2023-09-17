import React from 'react';
import './ExpensesCalculator.css';

const ExpensesCalculator = ({ expensesData }) => {
  const totalExpenses = expensesData.reduce((acc, expense) => {
    return Math.round((acc + expense.amount) * 100) / 100;
  }, 0);

  return (
    <div className='expenses-calculator'>
      <div className='expenses-calculator__total'>Total Expenses: £{totalExpenses}</div>
    </div>
  );
};

export default ExpensesCalculator;
