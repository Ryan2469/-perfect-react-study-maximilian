import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

import styles from './AddNewUser.module.css'


const AddNewUser = (props) => {
    
    const [addName, setAddName] = useState('');
    const [addAge, setAddAge] = useState('');
    const [error, setError] = useState();

    const addNameChangeHandler = (event) => {
        setAddName(event.target.value);   
        // console.log(event.target.value);
    }

    const addAgeChangeHandler = (event) => {
        setAddAge(event.target.value);

    }

    const errorHandler = () => {
        setError(null);
      };

    const submitHandler = (event) => {
        event.preventDefault();

        if (addName.trim().length === 0 || addAge.trim().length === 0) {
            setError({
              title: 'Invalid input',
              message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
          }
          if (+addAge < 1) {
            setError({
              title: 'Invalid age',
              message: 'Please enter a valid age (> 0).',
            });
            return;
          }

        props.onUserInfo(addName, addAge)

        setAddName('');
        setAddAge('');


    };

    return(
        <div>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={styles.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={addName}
                        onChange={addNameChangeHandler}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        value={addAge}
                        onChange={addAgeChangeHandler}
                    />
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddNewUser;