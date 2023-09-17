import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({ onFilterChange, selected }) => {
  const handleFilterChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select
          value={selected}
          onChange={handleFilterChange}
        >
          <option value='all'>All Expenses</option>
          <option value='2022'>2023</option>
          <option value='2021'>2022</option>
          <option value='2020'>2021</option>
          <option value='2019'>2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
