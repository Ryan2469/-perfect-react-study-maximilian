import React from 'react';
import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

const ExpensesList = (props) => {

    if (props.items.length === 0 ) {
        return <h1 className='expenses-list__fallback'> 데이터가 없습니다. </h1>
    }

    return(
        <ul className='expenses-list'>
            {props.items.map((items) =>  
                    <ExpenseItem
                      key = {items.id}
                      title = {items.title}
                      amount = {items.amount}
                      date = {items.date}
                    />)
              }
        </ul>
        
    )
}

export default ExpensesList;