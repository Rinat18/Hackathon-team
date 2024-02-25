import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import eclipse from "../../images/Ellipse 336.png";
import "./Product.scss";
import "./products.scss";
import { Link, useParams } from "react-router-dom";
import { UseProduct } from "../../context/ProductContextProvider";
import { useFavorite } from "../../context/FavoritesContextProvider";

export default function EditProductsPage() {
  const { id } = useParams();
  const { getOneProduct, oneProduct, editProduct } = UseProduct();
  const { addToFavorite, readFavorite, checkProduct } = useFavorite();
  useEffect(() => {
    readFavorite();
  }, []);

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
    <div className="edit-page">
      <h1>ADMIN PAGE: EDIT</h1>
      <div className="wrapper-edit">
        <div className="container-edit">
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
                    required
                    value={product.price}
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
        <div className="card">
          <div className="card__image">
            <img src={product.image} alt="Product Image" />
            <div
              style={{ backgroundColor: "white", borderRadius: "20px" }}
              className="card__overlayFavorites"
            ></div>
          </div>

          <div className="card__container">
            <div className="card__prices">
              <p className="card__price">{product.price}c</p>
              <p className="card__discount">discount</p>
              <p className="card__originalPrice">Original Price</p>
            </div>
            <div className="card__title">{product.title}</div>
            <div className="card__accs">
              <div className="card__steam">
                <img src={eclipse} alt="" />
                <div>Key</div>
              </div>
              <div className="card__steam card__steam2 ">
                <img src={eclipse} alt="" />
                <div>Steam</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
