import React, { useState } from 'react';
import Constants from '../../Constants';
import {Marker} from '../HOC/withMarker';

export default function Category(props) {
    const [gategoryName] = useState(props.gategoryName)
    return (
        <div className="element" id="element"
            onClick={() => props.chooseCategory(gategoryName)}
        >
            <label>{gategoryName}:                
             <Marker categor="BENKET" src="pre.webp" clas="pre-order" gategoryName={gategoryName}/>
             <Marker categor="KIDS" src="kids.png" clas="kids" gategoryName={gategoryName}/>   
            {/* {props.gategoryName === Constants.products.BENKET
            ?
           <img
            src={"pre.webp"}
            className="pre-order"
            alt="sign"
            />
            : ""} */}
            {/* {props.gategoryName === Constants.products.KIDS
            ?
           <img
            src={"kids.png"}
            className="kids"
            alt="sign"
            />
           : ""} */}
            </label>
           
        </div>
    )
}