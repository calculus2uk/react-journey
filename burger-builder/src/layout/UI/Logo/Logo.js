import React from 'react';
import burgerLogo from '../../../assets/logo.png';
import styles from './Logo.css';

export default () => {
  return (
    <div className={styles.Logo}>
      <img src={burgerLogo} alt="Burger Logo" />
    </div>
  );
};
