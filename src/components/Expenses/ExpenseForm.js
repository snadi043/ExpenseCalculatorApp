import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [EnteredTitle, setEnteredTitle] = useState('');
    const [EnteredAmount, setEnteredAmount] = useState('');
    const [EnteredDate, setEnteredDate] = useState('');

    const changeTitleHandler = (event) => {
        setEnteredTitle(event.target.value);      
    }

    const changeAmountHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const changeDateHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    
    const submitHandler = (event) => {
        event.preventDefault();

        const Expenses = {
            title: EnteredTitle,
            amount: EnteredAmount,
            date: new Date(EnteredDate),
        }
        
        props.onSaveExpenseData(Expenses);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }


    
    return (
        <form onSubmit={submitHandler}>

        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label className=".new-expense__control label">Title</label>
                <input className=".new-expense__control input" value={EnteredTitle} onChange={changeTitleHandler} type="text"/>
            </div>
            
            <div className="new-expense__control">
                <label className=".new-expense__control label">Amount</label>
                <input  className=".new-expense__control input" onChange={changeAmountHandler} value={EnteredAmount} type="number" min="0.01" step="0.01"/>
            </div>

            <div className="new-expense__control">
                <label className=".new-expense__control label">Date</label>
                <input className=".new-expense__control input" onChange={changeDateHandler} value={EnteredDate} type="date" min="2019-01-01" max="2020-12-31"/>
            </div>

        </div>

        <div className="new-expense__actions">

           <button type="submit">Add Expense</button>
           <button type="button" onClick={props.onCancel}>Cancel</button>
       </div>
        </form>
    );
        
    }

export default ExpenseForm;