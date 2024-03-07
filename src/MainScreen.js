import React, { Component } from 'react'
import { getAllGoods } from './request';
import constants from './Constants';
import Preloader from './components/Menu/Preloader';
import Categories from './components/Menu/Categories';
import Products from './components/Products/Products';

export default class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProducts: {},
      category: constants.products.APPETIZER
    };  
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  async componentDidMount() {
    const { category } = this.state;
    const { data } = await getAllGoods();
    const currentProducts = data.categories.find((el) => el.name === category);
    this.setState(() => ({
      currentProducts,
      data
    }));
  }
  chooseCategory(category) {
    this.setState(() => ({
      category,
      currentProducts: this.state.data.categories.find((el) => el.name === category),
    }));
  }
  render() {
   const { currentProducts} = this.state;
    return (
      Object.keys(currentProducts).length
      ? (
          <>
            <span >
              <img src="logo.webp" alt="logo" className="logo"/>
            </span>
            <span >
              <img src="LABEL.webp" alt="logo" className="label"/>
            </span>
            <Categories
              allCategories={this.state.data}
              chooseCategory={this.chooseCategory}
              currentProducts={currentProducts}
            />
            <Products
              products={currentProducts}
              chooseCategory={this.chooseCategory}
            />
          </>
        ) : <Preloader />
    );
  }
}