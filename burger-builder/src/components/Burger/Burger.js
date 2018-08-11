import React from 'react';
import styles from './Burger.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

const burger = props => {
  const { ingredients } = props;
  let transformedIngredients = Object.keys(ingredients)
    .map(item => {
      return [...Array(ingredients[item])].map((_, i) => (
        <BurgerIngredient key={item + i} type={item} />
      ));
    })
    .reduce((prev, curr) => {
      return prev.concat(curr);
    }, []);
  transformedIngredients.length === 0
    ? (transformedIngredients = <p>Please start adding Ingredients</p>)
    : transformedIngredients;
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
