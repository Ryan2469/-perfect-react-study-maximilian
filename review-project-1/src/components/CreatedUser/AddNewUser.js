import React, { useState, useRef } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

import styles from './AddNewUser.module.css'


const AddNewUser = (props) => {
    
    const addName = useRef();
    const addAge = useRef();

    const [error, setError] = useState();

    const errorHandler = () => {
        setError(null);
      };

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredName = addName.current.value;
        const enteredAge = addAge.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
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

        props.onUserInfo(enteredName, enteredAge);
        addName.current.value = '';
        addAge.current.value = '';
    };

    return(
        <React.Fragment>
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
                        ref={addName}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        ref={addAge}
                    />
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </React.Fragment>
    )
}

export default AddNewUser;