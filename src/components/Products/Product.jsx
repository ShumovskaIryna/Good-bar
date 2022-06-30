import React from 'react';

export default function Product(props) {
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
        {props.product.isPreOrder
            ?
           <img
            src={"pre.webp"}
            className="pre-order-s"
            alt="pre-order"
            />
           : ""}
        </div>
      </div>
    );
  }
