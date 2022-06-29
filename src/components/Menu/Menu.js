import React, { useState} from 'react';
import Categories from './Categories';
import Preloader from './Preloader';

export default function Menu(props) {
  const {
    chooseCategory,
    currentProducts } = props;
  let [category, setCategory] = useState("Сети")
  return (
    <header className="header">
     <Preloader />
      <span >
        <img
          src="logo.webp"
          alt="logo"
          className="logo"
        />
      </span>
       <span >
        <img
          src="LABEL.webp"
          alt="logo"
          className="label"
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
