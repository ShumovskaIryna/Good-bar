import React from 'react'; 
import Category from './Category';
import Products from '../Products/Products';
import VladTest from './VladTest';

export default function Categories(props) {
  const {
    chooseCategory,
    currentProducts,
    allCategories,
  } = props;
  console.log(props);
  return (
          <div className="categories">
      <VladTest
                chooseCategory={chooseCategory}
        currentProducts={currentProducts}
        allCategories={allCategories}
      />
              <Products
               products={currentProducts}
              chooseCategory={chooseCategory}
             />
        </div>
  )
}