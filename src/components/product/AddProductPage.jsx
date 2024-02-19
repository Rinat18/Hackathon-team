import React, { useEffect, useState } from "react";

import { UseProduct } from "../../context/ProductContextProvider";

export default function AddProductPage() {
  const { addProduct } = UseProduct();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    image: "",
  });
  useEffect(() => {}, []);
  const handleInput = (e) => {
    console.log(e.target.name);
    if (e.target.name === "price") {
      const obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      const obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };
  const handleClick = () => {
    addProduct(product);
  };
  return (
    <div>
      <h1>ADMIN PAGE: ADD</h1>
      <input name="title" label="title" onChange={handleInput} type="text" />
      <input
        name="description"
        label="description"
        onChange={handleInput}
        type="text"
      />
      <input
        name="category"
        label="category"
        onChange={handleInput}
        type="text"
      />
      <input name="price" label="Price" onChange={handleInput} type="number" />
      <input
        name="image"
        label="Image URL"
        onChange={handleInput}
        type="text"
      />
      <button onClick={handleClick}>Add Product</button>
    </div>
  );
}
