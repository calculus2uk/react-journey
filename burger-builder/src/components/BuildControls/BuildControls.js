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
      {controls.map(ctrl => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            add={() => props.addIngredients(ctrl.type)}
            remove={() => props.removeIngredients(ctrl.type)}
          />
        );
      })}
    </div>
  );
};

export default buildControls;
