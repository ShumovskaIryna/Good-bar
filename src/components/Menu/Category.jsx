import React, { useState } from 'react';
import Constants from '../../Constants';

export default function Category(props) {
    const [categoryName] = useState(props.categoryName)
    return (
        <div className="element" id="element" 
            onClick={() => props.chooseCategory(categoryName)}>
            <label>{categoryName}:
            </label>    
        </div>
    )
}