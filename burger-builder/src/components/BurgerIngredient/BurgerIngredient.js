import React from 'react';
import styles from './BurgerIngredient.css';
import PropTypes from 'prop-types';

const burgerIngredient = props => {
  let ingredients = null;

  switch (props.type) {
    case 'bread-bottom':
      ingredients = <div className={styles.BreadBottom} />;
      break;
    case 'bread-top':
      ingredients = (
        <div className={styles.BreadTop}>
          <div className={styles.Seeds1} />
          <div className={styles.Seeds2} />
        </div>
      );
      break;
    case 'meat':
      ingredients = <div className={styles.Meat} />;
      break;
    case 'cheese':
      ingredients = <div className={styles.Cheese} />;
      break;
    case 'salad':
      ingredients = <div className={styles.Salad} />;
      break;
    case 'bacon':
      ingredients = <div className={styles.Bacon} />;
      break;
    default:
      ingredients = null;
  }
  return ingredients;
};

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};
export default burgerIngredient;
