import React from "react";
import {HiShoppingCart} from 'react-icons/hi'

const FastFoodItem = ({ name, price, ingredients, imageUrl }) => {
  return (
    <div className="card product-card h-100 border-0 shadow-sm pb-1 ">
      <span
        className="badge badge-end badge-shadow bg-success fw-medium"
        style={{ fontSize: "9px" }}
      >
        قیمت: {price.toLocaleString()} تومان
      </span>
      <img src={imageUrl} className="card-img-top" />
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
        <button style={{ fontSize: "10px" }} className="btn btn-outline-success btn-sm w-100 mt-auto fw-bold">
            <HiShoppingCart className="ms-1"/>
            افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default FastFoodItem;