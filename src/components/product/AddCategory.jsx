import React, { useState } from "react";
import { UseProduct } from "../../context/ProductContextProvider";

const AddCategory = (props) => {
  const { open, handleClose } = props;
  const { createCategory } = UseProduct();
  const [category, setCategory] = useState("");

  const handleInputChange = (e) => {
    setCategory(e.target.value);
  };

  const handleClick = () => {
    if (!category) {
      alert("Заполните поле!");
      return;
    } else {
      const newCategory = {
        name: category,
      };
      createCategory(newCategory);
      setCategory("");
    }
    handleClose();
  };

  return (
    <div style={{ display: open ? "block" : "none" }}>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: "1000",
        }}
        onClick={handleClose}
      ></div>
      <div
        className="form-box-add"
        style={{
          position: "fixed",
          top: "40%",
          left: "40%",
          width: "25%",
          padding: "20px",
          backgroundColor: "#000",
          border: "1px solid #fff",
          borderRadius: "15px",
          zIndex: "1001",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#fff" }}>Add new Category</h2>
        <div className="input-box-cat">
          <input
            type="text"
            required
            onChange={handleInputChange}
            style={{ marginBottom: "10px", padding: "5px" }}
          />
          <label>New Category</label>
        </div>
        <button onClick={handleClick} className="btn-add-card">
          Save Category
        </button>
      </div>
    </div>
  );
};

export default AddCategory;
