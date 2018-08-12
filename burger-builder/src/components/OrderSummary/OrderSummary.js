import React from 'react';

const orderSummary = props => {
  const ingreSummary = Object.entries(props.ingredients).map(item => {
    return (
      <li key={item}>
        <span style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
          {item[0]}:
        </span>{' '}
        {item[1]}
      </li>
    );
  });
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A tasty burger with the following ingredients: </p>
      {ingreSummary}
      <p>Continue to CheckOut</p>
    </React.Fragment>
  );
};

export default orderSummary;
