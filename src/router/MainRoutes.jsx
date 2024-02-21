import React from "react";
import HomePage from "../components/pages/HomePage";
import ProductListPage from "../components/product/ProductListPage";
import AddProductPage from "../components/product/AddProductPage";
import EditProductsPage from "../components/product/EditProductsPage";
import DetailProductPage from "../components/product/DetailProductPage";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../components/pages/AboutUs";

import Cart from "../components/cart/Cart";
import FilterationPage from "../components/pages/FilterationPage";

export default function MainRoutes() {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage /> },
    { link: "/list", element: <ProductListPage /> },
    { link: "/add", element: <AddProductPage /> },
    { link: "/edit/:id", element: <EditProductsPage /> },
    { link: "/detail/:id", element: <DetailProductPage /> },
    { link: "/about", element: <AboutUs /> },
    { link: "/filter", element: <FilterationPage /> },
    { link: "/cart", element: <Cart /> },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((elem) => (
          <Route key={elem.link} path={elem.link} element={elem.element} />
        ))}
      </Routes>
    </>
  );
}
