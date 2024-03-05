import React from 'react';

const CartIcon = ({ cartItemsCount }) => {
  return (
    <div className="cart-icon">
      <button>Cart ({cartItemsCount})</button>
    </div>
  );
};

export default CartIcon;
