import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="product-card">
        <div className="good">
            <div className="descrtiption">
            <p className="title">{this.props.product.name}</p>
            <p className="desc">{this.props.product.description}</p>
            <b className="price">
              {this.props.product.prices}
            </b>
          </div>
          <img
            src={this.props.product.gallery[0]}
            className="gallery"
            alt="product"
          />
        </div>
      </div>
    );
  }
}
export default Product;
