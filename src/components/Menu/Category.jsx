import React, { useState } from 'react';

export default function Category(props) {
    const [gategoryName] = useState(props.gategoryName)
    return (
        <div className="element"
            onClick={() => props.chooseCategory(gategoryName)}
        >
            <label>{gategoryName}:</label>
        </div>
    )
}