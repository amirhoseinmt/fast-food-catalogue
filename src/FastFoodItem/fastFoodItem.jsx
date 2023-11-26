import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import "./fastFoodItem.css";

const FastFoodItem = ({ name, price, ingredients, imageUrl, delay }) => {
  return (
    <div
      className="card product-card h-100 border-0 shadow-sm pb-1 fade-in-horiz"
      style={{ animationDelay: delay + "s" }}
    >
      <span
        className="badge badge-end badge-shadow bg-success fw-medium"
        style={{ fontSize: "9px" }}
      >
        قیمت: {price.toLocaleString()} تومان
      </span>
      <div className="card__placeholder">
        <img className="card-img-top" src={imageUrl} />
      </div>

      <div className="card-body text-center pt-2 pb-3 d-flex flex-column">
        <h6 style={{ fontSize: "14px" }} className="mb-1">
          {name}
        </h6>
        <div
          style={{ fontSize: "9px" }}
          className="pt-1 fw-bold text-muted mb-3"
        >
          {ingredients}
        </div>
        <button
          style={{ fontSize: "10px" }}
          className="btn btn-outline-success btn-sm w-100 mt-auto fw-bold"
        >
          <HiShoppingCart className="ms-1" />
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default FastFoodItem;
