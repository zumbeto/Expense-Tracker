import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ expensesData, onDeleteExpense }) => {
  if (expensesData.length === 0) {
    return <p className='expenses-list__fallback'>No Results Found</p>;
  }

  return (
    <ul className='expenses-list'>
      {expensesData.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={parseFloat(expense.amount)}
          date={expense.date}
          onDelete={onDeleteExpense}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
