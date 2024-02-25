import React, { useEffect, useState } from "react";
import "./products.scss";
import { UseProduct } from "../../context/ProductContextProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import VoiceSearch from "./VoiceSearch";

export default function SideBar() {
  const [price, setPrice] = useState(50);
  const [maxPriceValue, setMaxPriceValue] = useState(0);
  const [minPriceValue, setMinPriceValue] = useState(0);

  const { categories, getCategories, fetchByParams, getProducts } =
    UseProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  // const [priceRange, setPriceRange] = useState({ min: 0, max: 7500 });
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [voiceInput, setVoiceInput] = useState("");

  const handleRangeChange = (event) => {
    setMaxPriceValue(event.target.value);
  };
  const handleRangeChangeMin = (event) => {
    setMinPriceValue(event.target.value);
  };

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
    // setPriceRange({ min: 0, max: 7500 });
    fetchByParams("category", "all");
    setSelectedCategory("all");
  };

  useEffect(() => {
    if (search !== searchParams.get("q")) {
      setVoiceInput(search);
    }
  }, [search, searchParams]);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleVoiceSearch = (text) => {
    setSearch(text);
    setVoiceInput(text);
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    setVoiceInput(event.target.value);
  };
  return (
    <>
      <div className="containerSideBar">
        <input
          className="input-search"
          style={{ color: "#fff" }}
          onChange={handleInputChange}
          value={voiceInput}
          type="text"
          placeholder="Я ищу...."
        />
        <VoiceSearch onSearch={handleVoiceSearch} />
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
                </div>
              ))}
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
