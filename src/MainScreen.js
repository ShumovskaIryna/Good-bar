import React, { useEffect, useState } from 'react';
import { getAllGoods } from './request';
import constants from './Constants';
import Preloader from './components/Menu/Preloader';
import Categories from './components/Menu/Categories';
import Products from './components/Products/Products';

export default function StartScreen() {
  const [currentProducts, setCurrentProducts] = useState({});
  const [category, setCategory] = useState(constants.products.APPETIZER);
  const [data, setData] = useState(null);

  const chooseCategory = (selectedCategory) => {
    setCategory(selectedCategory);
    setCurrentProducts(data.categories.find((el) => el.name === selectedCategory));
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllGoods();
      const initialProducts = data.categories.find((el) => el.name === category);

      setData(data);
      setCurrentProducts(initialProducts);
    };

    fetchData();
  }, [category]);

  return (
    <>
      {Object.keys(currentProducts).length ? (
        <>
          <header>
            <span>
              <img src="logo.webp" alt="logo" className="logo" />
            </span>
            <span>
              <img src="LABEL.webp" alt="logo" className="label" />
            </span>
            <Categories
              allCategories={data}
              chooseCategory={chooseCategory}
              currentProducts={currentProducts}
            />
          </header>
          <Products products={currentProducts} chooseCategory={chooseCategory} />
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
}