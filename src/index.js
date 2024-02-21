import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import FavoritesContextProvider from "./context/FavoritesContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ProductContextProvider>
        <FavoritesContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </FavoritesContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
