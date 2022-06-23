import React, { useState } from 'react';
// import Products from '../Products/Products';

export default function Category(props) {
    const [gategoryName] = useState(props.gategoryName)
//      const {
//     chooseCategory,
//     currentProducts
//   } = props;
    return (
        <div className="element"
            onClick={() => props.chooseCategory(gategoryName)}
        >
            <label>{gategoryName}:
                 {/* <Products
               products={currentProducts}
              chooseCategory={chooseCategory}
             /> */}
            </label>
        </div>
    )
}