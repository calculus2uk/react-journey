import React from 'react';
import styles from './NavigationItem.css';

export default props => {
  return (
    <li className={styles.NavigationItem}>
      <a href={props.link} className={props.active ? styles.active : null}>
        {props.children}
      </a>
    </li>
  );
};
