import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddNewExpense }) => {
  const handleNewExpenseDataSave = (newExpenseData) => {
    const newExpense = {
      ...newExpenseData,
    };

    onAddNewExpense(newExpense);
  };

  return (
    <div className='new-expense'>
      <NewExpenseForm onNewExpenseDataSave={handleNewExpenseDataSave} />
    </div>
  );
};

export default NewExpense;
