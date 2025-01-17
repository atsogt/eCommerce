import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({ name, imageUrl, price }) => (
  //fetch items from endpoint
  <div className='collection-item'>
    <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='collection-footer'>
      //fetch item object from endpoint
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);

export default CollectionItem;
