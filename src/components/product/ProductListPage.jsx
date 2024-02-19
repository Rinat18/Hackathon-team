import React, { useEffect } from "react";
import { UseProduct } from "../../context/ProductContextProvider";
import ProductCard from "./ProductCard";

export default function ProductListPage() {
  const { getProducts, products } = UseProduct();
  useEffect(() => {
    getProducts();
  });
  return (

    <div style={{ width: "100%", height: "100vh" }}>
      {products.map((elem) => (
        <ProductCard key={elem.id} elem={elem} />
      ))}
    </div>
  );
}
