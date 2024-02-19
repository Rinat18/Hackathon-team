import React from "react";
import { Link, NavLink } from "react-router-dom";
import { UseProduct } from "../../context/ProductContextProvider";

export default function ProductCard({ price, title, id }) {
  const { deleteProduct } = UseProduct();
  return (
    <div className="card">
      <img src="image.jpg" alt="Product Image" class="image" />
      <p className="price">{price}</p>
      <p className="discount">discount</p>
      <p className="original-price">Original Price</p>
      <h2>{title}</h2>
      <a href="#">Key</a>
      <a href="#">Account Steam</a>
      <button onClick={(e) => deleteProduct(id)}>Delete</button>
      <NavLink to={`edit/${id}`}>
        <button>Edit</button>
      </NavLink>
    </div>
  );
}
