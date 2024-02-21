import React from "react";

const CategorySelect = ({ categories, handleInput }) => {
  return (
    <div>
      <label htmlFor="category">Choose Category:</label>
      <select id="category" name="category" onChange={handleInput}>
        <option value="all">All</option>
        {categories.map((elem) => (
          <option key={elem.id} value={elem.name}>
            {elem.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelect;
