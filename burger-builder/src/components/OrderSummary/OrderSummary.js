import React from 'react';
import Button from '../../layout/UI/Button/Button';
const orderSummary = props => {
  const ingreSummary = Object.entries(props.ingredients).map(item => {
    return (
      <li key={item}>
        <span style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
          {item[0]}:
        </span>
        {item[1]}
      </li>
    );
  });
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A tasty burger with the following ingredients: </p>
      {ingreSummary}
      <p>
        <strong>Total Price: {props.price}</strong>
      </p>
      <p>Continue to CheckOut</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </React.Fragment>
  );
};

export default orderSummary;
