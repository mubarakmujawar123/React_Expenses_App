import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';
const ExpenseItem = (props) => {
  const buttonClickHandler = () => {
    console.log('clicked');
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={buttonClickHandler}> chane title</button>
    </Card>
  );
};
export default ExpenseItem;
