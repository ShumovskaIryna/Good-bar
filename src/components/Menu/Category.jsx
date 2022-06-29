import React, { useState } from 'react';

export default function Category(props) {
    const [gategoryName] = useState(props.gategoryName)
    return (
        <div className="element" id="element"
            onClick={() => props.chooseCategory(gategoryName) && document.getElementById("element").classList.add("active")}
        >
            <label>{gategoryName}:
            </label>
        </div>
    )
}