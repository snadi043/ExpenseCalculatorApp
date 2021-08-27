import React, {useState} from 'react';
import ExpenseForm from '../Expenses/ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const savedExpenseDataHandler = ( enteredExpenseData ) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    return (
    <div className="new-expense">
        {!isEditing && <button className="btn btn-primary" onClick={startEditingHandler}> Add New Expense </button>}
        {isEditing && <ExpenseForm onSaveExpenseData={savedExpenseDataHandler} onCancel={stopEditingHandler}/>}

    </div>
    );
}
export default NewExpense;