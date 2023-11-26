import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({searchItems}) => {
  const [value, setValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    searchItems(value);
  }

  return (
    <form onSubmit={onSubmit} className="search flex-fill d-flex align-items-center">
      <div className="input-group">
        <input
          type="text"
          className="form-control rounded-end pe-5 py-1 border-success"
          style={{ fontSize: "10px" }}
          placeholder="جستجوی فست فود..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <CiSearch className="position-absolute top-50 translate-middle-y me-2 text-muted"/>
      </div>
    </form>
  );
};

export default SearchBar;
