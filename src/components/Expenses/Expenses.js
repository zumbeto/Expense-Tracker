import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesCalculator from './ExpensesCalculator';
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
        <ExpensesChart expensesData={filteredExpenses} />
        <ExpensesList expensesData={filteredExpenses} />
        <ExpensesCalculator expensesData={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
