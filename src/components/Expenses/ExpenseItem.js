import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = ({ date, title, amount, onDelete, id }) => {
  const handleDeleteClick = () => {
    onDelete(id);
  };
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>
            {amount.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}
          </div>
          <button
            className='delete-button'
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
