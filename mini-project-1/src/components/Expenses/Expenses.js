import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2020);

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  // let newDummy_Data = [];

  // for (let i = 0; i<props.items.length; i++ ) {
  //   if(props.items[i].date.getFullYear() == filteredYear) {
  //     newDummy_Data.push(props.items[i]);
  //   }
  // }
  // console.log(newDummy_Data);

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear() == filteredYear
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler} 
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>

        {/* {contextExpress} */}
        {/* {filteredExpenses.length === 0 && <h1>데이터가 없습니다.</h1>}
        {filteredExpenses.length > 0 &&
        filteredExpenses.map((items) =>  
        <ExpenseItem
          key = {items.id}
          title = {items.title}
          amount = {items.amount}
          date = {items.date}
        />)} */}

      </Card>
    </div>
  );
};

export default Expenses;
