import React from 'react';
import Product from './Product';

function Products(props) {
  const {
    products
  } = props;
  return (
    <div className="products">
      {products?.products.map((el) => (
        <Product
          key={el.id}
          product={el}
        />
      ))}
    </div>
  );
}
export default Products;
