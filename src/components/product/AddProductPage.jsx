import React, { useEffect, useState } from "react";
import "../product/products.scss";

import { UseProduct } from "../../context/ProductContextProvider";

export default function AddProductPage() {
  const { addProduct } = UseProduct();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    image: "",
    comments: [],
    likes: [],
    unlikes: [],
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
  console.log();
  const handleClick = () => {
    addProduct(product);
  };
  return (
    <div className="add-page">
      <h1>ADMIN PAGE: ADD</h1>

      <div className="container-add">
        <div className="wrapper">
          <div className="form-box add">
            <h2>Add Product</h2>
            <p>Complete the form, to add a new product</p>
            <form action="">
              <div className="input-box">
                <input
                  name="title"
                  onChange={handleInput}
                  type="text"
                  required
                />
                <label>Title</label>
              </div>
              <div className="input-box">
                <input
                  name="description"
                  onChange={handleInput}
                  type="text"
                  required
                />
                <label>Description</label>
              </div>
              <div className="input-box">
                <input
                  name="category"
                  onChange={handleInput}
                  type="text"
                  required
                />
                <label>Category</label>
              </div>
              <div className="input-box">
                <input
                  name="price"
                  onChange={handleInput}
                  type="text"
                  required
                />
                <label>Price</label>
              </div>

              <div className="input-box">
                <input
                  name="image"
                  onChange={handleInput}
                  type="text"
                  required
                />
                <label>Image</label>
              </div>
              <button className="btn-add-card" onClick={handleClick}>
                Save Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
