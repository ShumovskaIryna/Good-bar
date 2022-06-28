import React from 'react';

function Product(props) {
  return (
      <div className="product-card">
        <div className="good">
            <div className="descrtiption">
            <p className="title">{props.product.name}</p>
            <p className="desc">{props.product.description}</p>
            <b className="price">
              {props.product.prices}
            </b>
          </div>
          <img
            src={props.product.gallery[0]}
            className="gallery"
            alt="product"
          />
          {props.product.isNew
            ?
           <img
            src={"new.webp"}
            className="new-prod"
            alt="product"
            />
           : ""}
        </div>
      </div>
    );
  }
export default Product;
