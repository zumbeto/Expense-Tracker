import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = ({ expensesData }) => {
  const [filteredYear, setFilteredYear] = useState('all');

  const handleFilterValue = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expensesData.filter((expense) => {
    if (filteredYear === 'all') {
      return expense;
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={handleFilterValue}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={parseFloat(expense.amount)}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
