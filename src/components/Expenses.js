import React, { useState } from 'react';
import './Expenses.css';
import ExpensesList from './ExpensesList/ExpensesList';
import Filter from './Filter/Filter';
import ExpensesChart from './Expenses/ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChanged = (yearChange) => {
    setFilteredYear(yearChange);
 
  }
    
  const FilteredExpenses = props.items.filter(expenses => {
    return expenses.date.getFullYear().toString() === filteredYear;
  })
  
  
    return(
      <div>
         <Filter 
         selected={filteredYear} 
         onFilterChange={filterChanged}/>
          <ExpensesChart expenses={FilteredExpenses}/>
        <ExpensesList items={FilteredExpenses}/>
      </div>
     
       
    );
}

export default Expenses;