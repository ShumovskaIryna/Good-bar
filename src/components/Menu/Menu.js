import React, { useState} from 'react';
import Categories from './Categories';

document.body.onload = function () {
  setTimeout(function () {
    var preloader = document.getElementById("page-preloader");
    if (!preloader.classList.contains("done")) {
      preloader.classList.add("done")
    }
  }, 3000);
}
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
      <div className="preloader" id="page-preloader">
        <div className="loader" id="loader">
          <img
            src="buk.png"
            className="buk"
          alt="buk"
          />
          <img
            src="Dum1.png"
            className="dum1"
          alt="Dum1"
          />
          <img
            src="Dum2.png"
            className="dum2"
           alt="Dum2"
        />
        </div>
      </div>
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
