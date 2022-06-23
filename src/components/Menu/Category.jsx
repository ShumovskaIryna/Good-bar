import React, { useState } from 'react';
// import Products from '../Products/Products';

export default function Category(props) {
    const [gategoryName] = useState(props.gategoryName)
    //  const {chooseCategory, currentProducts} = props;
    //var element = document.getElementById("element");
    return (
        <div className="element" id="element"
            onClick={() => props.chooseCategory(gategoryName) && document.getElementById("element").classList.add("active")}
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