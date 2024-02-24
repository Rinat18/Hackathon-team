import React, { useEffect, useState } from "react";
import "./products.scss";
import { UseProduct } from "../../context/ProductContextProvider";
import { useSearchParams } from "react-router-dom";

export default function SideBar() {
  const [price, setPrice] = useState(50);
  const { categories, getCategories, fetchByParams, getProducts } =
    UseProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 7500 });
  const [selectedCategory, setSelectedCategory] = useState("all");
  useEffect(() => {
    setSearchParams({
      q: search,
    });
    getProducts();
  }, [search]);

  useEffect(() => {
    getCategories();
  }, []);

  const resetFilters = () => {
    setSearch("");
    setPriceRange({ min: 0, max: 7500 });
    fetchByParams("category", "all");
    setSelectedCategory("all");
  };
  return (
    <>
      <div className="containerSideBar">
        <input
          className="input-search"
          style={{ color: "#fff" }}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Я ищу...."
        />
        <div className="containerSiderBar__title">
          <h3>Categories</h3>
          <div className="containerSideBar-title__checkbox">
            <div>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <input
                  className="input-radio"
                  onChange={() => {
                    fetchByParams("category", "all");
                    setSelectedCategory("all");
                  }}
                  type="radio"
                  id="all"
                  name="category"
                  value="all"
                  defaultChecked
                  checked={selectedCategory === "all"}
                />
                <h4 style={{ marginTop: "10px" }}>All</h4>
              </label>
              {/* <label htmlFor="all">All</label> */}
              {categories.map((elem) => (
                <div key={elem.id}>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                    htmlFor={elem.name}
                  >
                    <input
                      className="input-radio"
                      onChange={() => {
                        fetchByParams("category", elem.name);
                        setSelectedCategory(elem.name);
                      }}
                      type="radio"
                      id={elem.name}
                      name="category"
                      value={elem.name}
                      label={elem.name}
                      checked={selectedCategory === elem.name}
                    />
                    <h4 style={{}}>{elem.name}</h4>
                  </label>

                  {/* <label htmlFor={elem.name}></label> */}
                </div>
              ))}
            </div>
            <div className="wrapper-side">
              <div className="wrapper-range">
                <div className="price-input">
                  <div className="field">
                    <span style={{ color: "#fff" }}>Min</span>
                    <input
                      type="number"
                      style={{ color: "#fff" }}
                      className="input-search"
                      value={priceRange.min}
                      name="min"
                    />
                  </div>
                  <div className="seperator">-</div>
                  <div className="field">
                    <span style={{ color: "#fff" }}>Max</span>
                    <input
                      type="number"
                      style={{ color: "#fff" }}
                      className="input-search"
                      value={priceRange.max}
                      name="max"
                    />
                  </div>
                </div>
                <div className="slider">
                  <div
                    className="progress"
                    style={{
                      left: `${(priceRange.min / 10000) * 100}%`,
                      right: `${(1 - priceRange.max / 10000) * 100}%`,
                    }}
                  ></div>
                </div>
                <div className="range-input">
                  <input
                    type="range"
                    className="range-min"
                    min={0}
                    max={10000}
                    value={priceRange.min}
                    step={100}
                  />
                  <input
                    type="range"
                    className="range-max"
                    min={0}
                    max={10000}
                    value={priceRange.max}
                    step={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn-add-card" onClick={resetFilters}>
          Сбросить фильтры
        </button>
      </div>
    </>
  );
}
