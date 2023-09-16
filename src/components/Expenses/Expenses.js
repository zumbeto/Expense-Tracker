import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = ({ expensesData }) => {
  const [filteredYear, setFilteredYear] = useState('2023');
  const handleFilterValue = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={handleFilterValue}
        />
        {expensesData.map((expense) => (
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
