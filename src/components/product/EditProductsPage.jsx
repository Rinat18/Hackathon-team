import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
    <div className="add-page">
      <h1>ADMIN PAGE: EDIT</h1>
      <div className="container-add">
        <div className="wrapper">
          <div className="form-box add">
            <h2>Product Editor</h2>
            <p>Complete the form, to update info about product</p>
            <form action="">
              <div className="input-box">
                <input
                  name="title"
                  onChange={handleInput}
                  type="text"
                  required
                  value={product.title}
                />
                <label>Title</label>
              </div>
              <div className="input-box">
                <input
                  name="description"
                  onChange={handleInput}
                  type="text"
                  required
                  value={product.description}
                />
                <label>Description</label>
              </div>
              <div className="input-box">
                <input
                  name="category"
                  onChange={handleInput}
                  type="text"
                  required
                  value={product.category}
                />
                <label>Category</label>
              </div>
              <div className="input-box">
                <input
                  name="price"
                  onChange={handleInput}
                  type="text"
                  requiredvalue={product.price}
                />
                <label>Price</label>
              </div>

              <div className="input-box">
                <input
                  name="image"
                  onChange={handleInput}
                  type="text"
                  required
                  value={product.image}
                />
                <label>Image</label>
              </div>
              <Link to={"/"}>
                <button className="btn-add-card" onClick={handleClick}>
                  Update Product
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
