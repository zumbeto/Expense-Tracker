import React, { useState, useEffect, useRef } from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = ({ onNewExpenseDataSave }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newDate, setNewDate] = useState('');

  const [hasError, setHasError] = useState(false);
  const errorTimeoutRef = useRef(null); // Store the timeout reference

  const handleInputChange = (identifier, value) => {
    if (identifier === 'title') {
      setNewTitle(value);
    } else if (identifier === 'amount') {
      setNewAmount(value);
    } else {
      setNewDate(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newTitle || !newAmount || !newDate) {
      setHasError(true);

      // CLear any existing timeout
      if (errorTimeoutRef.current) {
        clearTimeout(errorTimeoutRef.current);
      }

      // Set a new timeout
      errorTimeoutRef.current = setTimeout(() => {
        setHasError(false);
      }, 3000);
      return;
    }

    const newExpenseData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate),
    };

    onNewExpenseDataSave(newExpenseData);

    setNewTitle('');
    setNewAmount('');
    setNewDate('');
  };

  // Clear the timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (errorTimeoutRef.current) {
        clearTimeout(errorTimeoutRef.current);
      }
    };
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={newTitle}
            onChange={(event) => handleInputChange('title', event.target.value)}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            value={newAmount}
            min='0.01'
            step='0.01'
            onChange={(event) => handleInputChange('amount', event.target.value)}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            value={newDate}
            min='2023-01-01'
            max='2024-01-01'
            onChange={(event) => handleInputChange('date', event.target.value)}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
      {hasError && <p className='error-message'>Please fill in all the fields!</p>}
    </form>
  );
};

export default NewExpenseForm;
