import React from 'react';

export default function Category(props) {
  const { categoryName, chooseCategory, selectedCategory } = props;

  return (
    <div
      className={`element ${selectedCategory === categoryName ? 'active' : ''}`}
      id="element"
      onClick={() => chooseCategory(categoryName)}
    >
      <label>{categoryName}</label>
    </div>
  );
}