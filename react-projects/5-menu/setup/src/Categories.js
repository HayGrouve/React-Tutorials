import React from 'react';

const Categories = ({ filetrItems, categories }) => {
  return <div className="btn-container">
    {categories.map((category, index) => {
      return <button key={index} className="filter-btn" onClick={() => filetrItems(`${category}`)}>
        {category}
      </button>
    })}
  </div>
};

export default Categories;
