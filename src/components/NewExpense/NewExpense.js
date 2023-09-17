import React, { useState } from 'react';
import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddNewExpense }) => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
  };

  const handleNewExpenseDataSave = (newExpenseData) => {
    const newExpense = {
      ...newExpenseData,
    };

    onAddNewExpense(newExpense);
    setShowForm(false);
  };

  return (
    <div className='new-expense'>
      {!showForm && (
        <button
          type='button'
          onClick={handleShowForm}
          className='new-expense__button'
        >
          Add New Expense
        </button>
      )}
      {showForm && (
        <NewExpenseForm
          onNewExpenseDataSave={handleNewExpenseDataSave}
          onCancel={handleHideForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
