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
  useEffect(() => {
    setSearchParams({
      q: search,
    });
    getProducts();
  }, [search]);

  useEffect(() => {
    getCategories();
  }, []);
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
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
        <form
          className="containerSiderBar__title"
        >
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
                  onChange={(e) => fetchByParams("category", e.target.value)}
                  type="radio"
                  id="all"
                  name="category"
                  value="all"
                  defaultChecked
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
                      onChange={(e) =>
                        fetchByParams("category", e.target.value)
                      }
                      type="radio"
                      id={elem.name}
                      name="category"
                      value={elem.name}
                      label={elem.name}
                    />
                    <h4 style={{ marginTop: "10px" }}>{elem.name}</h4>
                  </label>

                  {/* <label htmlFor={elem.name}></label> */}

                </div>
              ))}
            </div>
            <label style={{ marginTop: 30 }} htmlFor="priceRange">
              Price: {price}
            </label>{" "}
            <input
              type="range"
              id="priceRange"
              name="priceRange"
              min="0"
              max="6000"
              step="1"
              value={price}
              onChange={handlePriceChange}
            />
          </div>
        </form>

        <button>Сбросить фильтры</button>
      </div>
    </>
  );
}
