import React from "react";

const Category = ({ category }) => {
  return <option value={category}>{category ? category : "loading..."}</option>;
};

export default Category;
