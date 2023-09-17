import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ expensesData }) => {
  if (expensesData.length === 0) {
    return <p className='expenses-list__fallback'>No Results Found</p>;
  }

  return (
    <ul className='expenses-list'>
      {expensesData.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={parseFloat(expense.amount)}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
