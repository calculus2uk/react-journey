import React from 'react';
import styles from './Person.css';
const person = (props) => {
    return (
        <div className={styles.Person}>
            <p onClick={props.click}> I am {props.name}, a person aged {props.age}</p>
            <p>{props.children} </p>
            <input type="text" onChange={props.fetchName} value={props.value} />
        </div>
        )
}

export default person;