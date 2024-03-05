import React, { useState } from 'react';
import { CartProvider } from '../Cart/Contexts/CartContext';
import Header from '../Headersection/Header';
import Headerbanner from "../Bannersection/Headerbanner";
import ProductScreen from '../Products/ProductScreen';
import Cart from '../Cart/Cart';


const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
];

// Changed function declaration here
const StorePage = () => {
  const [cart, setCart] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCartItemCount(cartItemCount + 1); // Increase item count
  };

  const updateCartCount = (count) => {
    setCartItemCount(count);
  };

  return (
    <CartProvider>
      <div>
        <Header cartItemsCount={cartItemCount} />
        <Headerbanner />
        <ProductScreen products={productsArr} addToCart={addToCart} />
        <Cart cartElements={cart} setCartElements={setCart} updateCartCount={updateCartCount} />
      </div>
    </CartProvider>
  );
}

export default StorePage;
