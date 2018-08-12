import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import styles from './BuildControls.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = props => {
  return (
    <div className={styles.BuildControls}>
      <p className={styles.Price}>Current Price: {props.price}</p>
      {controls.map(ctrl => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            add={() => props.addIngredients(ctrl.type)}
            remove={() => props.removeIngredients(ctrl.type)}
            disableInfo={props.disableInfo[ctrl.type]}
          />
        );
      })}
      <button className={styles.OrderButton} disabled={!props.purchasable}>
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
