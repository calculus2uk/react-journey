import React from 'react';
import styles from './Layout.css';
import Toolbar from './UI/Navigation/Toolbar/Toolbar';
import SideDrawer from './UI/Navigation/SideDrawer/SideDrawer';

const layout = props => {
  return (
    <React.Fragment>
      <Toolbar />
      <SideDrawer />
      <main className={styles.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default layout;
