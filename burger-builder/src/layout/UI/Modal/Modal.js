import React from 'react';
import styles from './Modal.css';
import classNames from 'classnames';

export default props => {
  const show = props.show;
  if (show) {
    return (
      <div className={classNames(styles.Modal, styles.Show)}>
        {props.children}
      </div>
    );
  } else {
    return (
      <div className={classNames(styles.Modal, styles.Hide)}>
        {props.children}
      </div>
    );
  }
};
