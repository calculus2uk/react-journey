import React from 'react';
import styles from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

export default props => {
  return (
    <header className={styles.Toolbar}>
      <div>MENU</div>
      <Logo />
      <NavigationItems />
    </header>
  );
};
