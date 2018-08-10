import React from 'react';

import styles from './Cockpit.css';

const cockpit = props => {
  let btnStyles = '';
  btnStyles = styles.red;
  return (
    <div className={styles.Cockpit}>
      <header className="Cockpit-header">
        <h1 className="Cockpit-title">I am new to React</h1>
      </header>
      <p className={styles.bold + ' ' + styles.red}>
        {' '}
        Hello there!!! Is it working ?
      </p>

      <button
        className={btnStyles}
        onClick={props.switch.bind(this, 'Isaccccc!!')}
      >
        Click Me
      </button>
      <button className={btnStyles} onClick={props.toggle}>
        {' '}
        Toggle Persons
      </button>
      <p>
        <button className={styles.yellow} onClick={props.addPerson}>
          Add Person
        </button>
      </p>
      <p>
        <input
          type="text"
          placeholder="Add person "
          onChange={props.getPerson}
        />
      </p>
    </div>
  );
};

export default cockpit;
