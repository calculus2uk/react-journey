import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
  salad: 1,
  bacon: 1.5,
  meat: 2,
  cheese: 1,
  bread: 1
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0
    },
    totalPrice: 3,
    purchasable: false
  };

  updatePurchasingHandler = () => {
    const { ingredients } = this.state;
    const purchasableState = Object.values(ingredients).reduce(
      (Prev, Curr) => Prev + Curr,
      0
    );
    this.setState({ purchasable: purchasableState > 0 });
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const { ingredients } = this.state;

    ingredients[type] = updatedCount;

    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: ingredients });
    this.updatePurchasingHandler();
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];

    if (oldCount > 0) {
      const updatedCount = oldCount - 1;
      const { ingredients } = this.state;
      ingredients[type] = updatedCount;

      const priceAddition = INGREDIENTS_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceAddition;

      this.setState({ totalPrice: newPrice, ingredients: ingredients });
      this.updatePurchasingHandler();
    }
  };
  render() {
    const { ingredients, totalPrice } = this.state;
    const disableInfo = { ...ingredients };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <React.Fragment>
        <Burger ingredients={ingredients} />
        <BuildControls
          addIngredients={this.addIngredientHandler}
          removeIngredients={this.removeIngredientHandler}
          disableInfo={disableInfo}
          price={totalPrice}
          purchasable={this.state.purchasable}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
