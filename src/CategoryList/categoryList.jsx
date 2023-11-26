import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "../axios";
import Loading from "../Loading/loading";

const CategoryList = ({ filterItems }) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get("/FoodCategory/categories");
      setCategories(response.data);
      setLoading(false);
    };

    fetchCategories();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading theme="primary" />;
    }
    return (
      <div className="ps-3 w-100 d-flex align-items-center justify-content-between gap-5">
        <ul className="nav">
          <li className="nav-item" onClick={() => filterItems()}>
            <a href="#" className="nav-link mx-n2" style={{ fontSize: "12px" }}>
              همه فست فود ها
            </a>
          </li>
          {categories.map((category) => ( //dosent work
            <li
              className="nav-item"
              key={category.id}
              onClick={() => filterItems(category.id)}
            >
              <a
                href="#"
                className="nav-link mx-n2"
                style={{ fontSize: "12px" }}
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <nav className="container mt-n4">
      <div
        className="d-flex align-items-center bg-white rounded-3 shadow-lg py-1"
        style={{ height: "50px", marginLeft: "80px", marginRight: "80px" }}
      >
        {renderContent()}
      </div>
    </nav>
  );
};

export default CategoryList;
