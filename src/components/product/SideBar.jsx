import React, { useEffect, useState } from "react";
import "./products.scss";
import { UseProduct } from "../../context/ProductContextProvider";
import { useSearchParams } from "react-router-dom";

export default function SideBar() {
  const [price, setPrice] = useState(50); // Initial price value
  const { categories, getCategories, fetchByParams } = UseProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const [search, setSearch] = useState(searchParams.get("q") || "");
  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getCategories();
  }, []);
  const handlePriceChange = (event) => {
    setPrice(event.target.value); // Update the price when the range input changes
  };

  return (
    <>
      <div className="containerSideBar">
        <input type="text" placeholder="Я ищу..." />
        <div className="containerSiderBar__title">
          <h3>Categories</h3>
          <div className="containerSideBar-title__checkbox">
            <label htmlFor="account">
              <input type="checkbox" id="account" name="account" />
              Rasing
            </label>
            <label htmlFor="key">
              <input type="checkbox" id="key" name="key" />
              Shooters
            </label>
            <label htmlFor="activation">
              <input type="checkbox" id="activation" name="activation" />
              Role Play
            </label>
            <label htmlFor="artifact">
              <input type="checkbox" id="artifact" name="artifact" />
              Strategy
            </label>
            <label style={{ marginTop: 30 }} htmlFor="priceRange">
              Цена: {price}
            </label>{" "}
            {/* Display the current price */}
            <input
              type="range"
              id="priceRange"
              name="priceRange"
              min="0"
              max="6000"
              step="1"
              value={price} // Set the value of the range input to the price
              onChange={handlePriceChange} // Handle changes to the range input
            />
          </div>
        </div>
        <button>Сбросить фильтры</button>
      </div>
    </>
  );
}
