import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = ({ cartElements, setCartElements, updateCartCount }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  useEffect(() => {
    // Update cart count when cartElements change
    updateCartCount(cartElements.length);
  }, [cartElements, updateCartCount]);

  const removeFromCart = (index) => {
    const updatedCart = [...cartElements];
    updatedCart.splice(index, 1);
    setCartElements(updatedCart);
  };

  return (
    <div className="cart">
      <button onClick={() => setIsCartVisible(!isCartVisible)}>
        {isCartVisible ? 'HIDE CART' : 'SHOW CART'}
      </button>
      {isCartVisible && (
        <ul>
          {cartElements.map((product, index) => (
            <li key={index}>
              <img src={product.imageUrl} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
