import React, { useState } from 'react';
import "./ExpenseItem.css";
import './ExpenseDate';
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    // function clickHandler(){

    // }

    const clickHandler = () => {
        setTitle('UPDATED!...');
        console.log('clicked!...')
    }
    

    

    return (
      <li>
      <div className="expense-item">
        <div className="expense-item__description">
           <ExpenseDate date={props.date}/>
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Click Here...</button>
        </div>
        </li>
    );
}

export default ExpenseItem;