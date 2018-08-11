import React from 'react';
import styles from './Burger.css';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

const burger = () => {
  return (
    <div className={styles.Burger}>
      <BurgerIngredients type="bread-top" />
      <BurgerIngredients type="cheese" />
      <BurgerIngredients type="meat" />
      <BurgerIngredients type="bacon" />
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
