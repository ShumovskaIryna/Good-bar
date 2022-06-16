import React from 'react'; 
import Products from '../Products/Products';
import Category from './Category';

function Categories(props) {
  // TODO: here we should do API call to get all list of possible groups of food ( goods )
  const {
    chooseCategory,
    currentProducts,
    allProducts,
  } = props;
  return (
          <div className="categories">
            { props.allCategories.categories.map(({ name }, index) => (
              <Category
                key={index}
                chooseCategory={chooseCategory}
                gategoryName={name}
                products={currentProducts}
              />
            ))}
              <Products
               products={currentProducts}
              chooseCategory={chooseCategory}
             />
        </div>
  )
}
export default Categories;
