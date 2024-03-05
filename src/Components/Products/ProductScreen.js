import React from 'react';
import "./ProductScreen.css";

const ProductScreen = ({ products, addToCart }) => {
  return (
    <div className="product">
      {products.map((product, index) => (
        <div key={index} className="product-item">
          <h3>{product.title}</h3>
          <div className="product-item-content">
            <img src={product.imageUrl} alt={product.title} />
            <div className='product-price-content'>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button> 
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductScreen;
