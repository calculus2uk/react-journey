import React from 'react';
import styles from './Modal.css';
import classNames from 'classnames';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
  return props.show ? (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div className={classNames(styles.Modal, styles.Show)}>
        {props.children}
      </div>
    </React.Fragment>
  ) : (
    <div className={classNames(styles.Modal, styles.Hide)}>
      {props.children}
    </div>
  );
};
export default modal;
