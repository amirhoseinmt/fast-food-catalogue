import React, { useEffect, useState } from "react";
import axios from "../axios";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get("/FoodCategory/categories");
    //   console.log(response.data);
      setCategories(response.data);
    };

    fetchCategories();
  }, []);

  return (
    <nav className="container mt-n4">
      <div
        className="d-flex align-items-center bg-white rounded-3 shadow-lg py-1"
        style={{ height: "50px", marginLeft: "80px", marginRight: "80px" }}
      >
        <ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link mx-n2" style={{fontSize: "12px"}}>
              همه فست فود ها
            </a>
          </li>
          {categories.map((category) => (
            <li className="nav-item" key={category.id}>
              <a href="#" className="nav-link mx-n2" style={{fontSize: "12px"}}>
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CategoryList;
