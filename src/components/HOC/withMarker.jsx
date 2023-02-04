import React from 'react';

export default function Marker(props, categor, src, clas) {
   const [gategoryName] = useState(props.gategoryName)
  return (
   <div>
      {props.gategoryName === Constants.products.{categor}
        ?
      <img
        src={src}
        className={clas}
        alt="sign"
            />
        : ""}
   </div>
  );
}