import React from 'react'; 
import Category from './Category';
import Products from '../Products/Products';


function Categories(props) {
  // TODO: here we should do API call to get all list of possible groups of food ( goods )
  const {
    chooseCategory,
    currentProducts
  } = props;
  return (
          <div className="categories">
            { props.allCategories.categories.map(({ name }, index) => (
              <div className="categorii">
                <Category
                key={index}
                chooseCategory={chooseCategory}
                gategoryName={name}
                products={currentProducts}
              /></div>
            ))}
              <Products
               products={currentProducts}
              chooseCategory={chooseCategory}
             />
        </div>
  )
}
export default Categories;
