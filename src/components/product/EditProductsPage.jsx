import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UseProduct } from "../../context/ProductContextProvider";

export default function EditProductsPage() {
  const { id } = useParams();
  const { getOneProduct, oneProduct, editProduct } = UseProduct();

  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    image: "",
  });
  const handleInput = (e) => {
    if (e.target.name === "price") {
      const obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      const obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };
  const handleClick = () => {
    editProduct(id, product);
  };
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);
  return (
    <div>
      <h1>ADMIN PAGE: EDIT</h1>
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
      <button onClick={handleClick}>Update Product</button>
    </div>
  );
}
