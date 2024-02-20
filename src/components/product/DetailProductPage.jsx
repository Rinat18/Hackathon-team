import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UseProduct } from "../../context/ProductContextProvider";

export default function DetailProductPage() {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = UseProduct();

  useEffect(() => {
    getOneProduct(id);
  }, []);
  console.log(oneProduct);
  return (
    <div>
      <div>{oneProduct.title}</div>
    </div>
  );
}
