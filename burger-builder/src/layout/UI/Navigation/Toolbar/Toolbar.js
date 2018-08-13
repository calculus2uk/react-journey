import React from 'react';
import styles from './Toolbar.css';
import Logo from '../../Logo/Logo';

export default props => {
  return (
    <header className={styles.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>...</nav>
    </header>
  );
};
