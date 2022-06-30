import React, { useState } from 'react';
import Constants from '../../Constants';

export default function Category(props) {
    const [gategoryName] = useState(props.gategoryName)
    return (
        <div className="element" id="element"
            onClick={() => props.chooseCategory(gategoryName)}
        >
            <label>{gategoryName}:
            {props.gategoryName === Constants.products.BENKET
            ?
           <img
            src={"pre.webp"}
            className="pre-order"
            alt="pre-order"
            />
                    : ""}
            {props.gategoryName === Constants.products.KIDS
            ?
           <img
            src={"kids.png"}
            className="kids"
            alt="kids"
            />
           : ""}
            </label>
           
        </div>
    )
}