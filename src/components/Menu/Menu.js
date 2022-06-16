import React, { useState} from 'react';
import Categories from './Categories';

// TODO: rename due to business requirement. It should not be TopComponent.
// might be Menu or Dishes or smth like this.
export default function Menu(props) {
  const {
    chooseCategory,
    currentProducts } = props;
  let [cartOpen, setCartOpen] = useState(false);
  let [category, setCategory] = useState("Сети")
  return (
    <header className="header">
      <span className="logo">
        <img
          src="logo.png"
          alt="logo"
        />
      </span>
       <span className="label">
        <img
          src="LABEL.png"
          alt="logo"
        />
      </span>
      <Categories
        allCategories={props.allCategories}
        allProducts={props.allProducts}
        chooseCategory={chooseCategory}
        currentProducts={currentProducts}
      />
    </header>
  );
}
