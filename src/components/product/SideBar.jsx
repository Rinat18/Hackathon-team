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
        <input
          style={{ color: "#fff" }}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Я ищу..."
        />
        <div className="containerSiderBar__title">
          <h3>Categories</h3>
          <div className="containerSideBar-title__checkbox">
            <div onChange={(e) => fetchByParams("category", e.target.value)}>
              <input
                type="radio"
                id="all"
                name="category"
                value="all"
                defaultChecked
              />
              <label htmlFor="all">All</label>
              {categories.map((elem) => (
                <div key={elem.id}>
                  <input
                    type="radio"
                    id={elem.name}
                    name="category"
                    value={elem.name}
                  />
                  <label htmlFor={elem.name}>{elem.name}</label>
                </div>
              ))}
            </div>
            <label style={{ marginTop: 30 }} htmlFor="priceRange">
              Цена: {price}
            </label>{" "}
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
