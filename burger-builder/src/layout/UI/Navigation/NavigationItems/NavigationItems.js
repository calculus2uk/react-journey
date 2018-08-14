import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.css';

export default props => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/" active>
        Checkout
      </NavigationItem>
    </ul>
  );
};
