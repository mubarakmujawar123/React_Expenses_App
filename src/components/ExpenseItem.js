import React from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const exppenseAmount = 200;

  return (
    <div className="expense-item">
      <div>{expenseDate.getDate()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${exppenseAmount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
