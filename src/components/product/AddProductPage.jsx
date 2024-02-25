import React, { useEffect, useState } from "react";
import "../product/products.scss";

import { UseProduct } from "../../context/ProductContextProvider";
import CategorySelect from "./CategorySeletct";
import AddCategory from "./AddCategory";

export default function AddProductPage() {
  const { addProduct, categories, getCategories } = UseProduct();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    image: "",
    comments: [],
    likes: [],
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
  useEffect(() => {
    getCategories();
  }, []);
  const handleClick = () => {
    addProduct(product);
  };
  return (
    <div className="add-page">
      <h1>ADMIN PAGE: ADD</h1>
      <div className="category-add">
        <button onClick={handleOpen} className="btn-add-card">
          Add Category
        </button>
        <AddCategory open={open} handleClose={handleClose} />
      </div>
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
                <CategorySelect
                  categories={categories}
                  handleInput={handleInput}
                />
                <label>Description</label>
              </div>
              <div className="input-box">
                <label htmlFor="category"></label>
                <select
                  style={{ borderRadius: "15px" }}
                  id="category"
                  name="category"
                  onChange={handleInput}
                >
                  <option style={{ background: "#000" }} value="all">
                    All
                  </option>
                  {categories.map((elem) => (
                    <option
                      style={{ background: "#000" }}
                      key={elem.id}
                      value={elem.name}
                    >
                      {elem.name}
                    </option>
                  ))}
                </select>
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
