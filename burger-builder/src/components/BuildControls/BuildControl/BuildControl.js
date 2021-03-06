import React from 'react';
import styles from './BuildControl.css';

const buildControl = props => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.label}</div>
      <button className={styles.More} onClick={props.add}>
        More
      </button>
      <button
        className={styles.Less}
        onClick={props.remove}
        disabled={props.disableInfo}
      >
        Less
      </button>
    </div>
  );
};

export default buildControl;
