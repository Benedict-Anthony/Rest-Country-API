import React from "react";

import { useState } from "react";
import { FaSearch, FaSortDown } from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function Search() {
  const [filterToggle, setFilterToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  function toggleFilter() {
    setFilterToggle(!filterToggle);
  }

  function handleSearch(e) {
    e.preventDefault();

    if (searchTerm.trim().length === 0) {
      return alert("Please enter a valid country");
    }

    navigate("/searched/" + searchTerm);
    setSearchTerm("");
  }
  return (
    <motion.section
      className="search"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container flex">
        <form onSubmit={handleSearch}>
          <div className="search__form">
            <input
              type="text"
              placeholder={"search for a country...."}
              onChange={handleChange}
            />
            <FaSearch onClick={handleSearch} />
          </div>
        </form>

        <nav className="search__filter">
          <button onClick={toggleFilter}>
            Filter By Region <FaSortDown />
          </button>
          <ul className={`dropdown ${filterToggle && "active"}`}>
            <NavLink className="filterLink" to={"/region/africa"}>
              africa
            </NavLink>
            <NavLink className="filterLink" to={"/region/america"}>
              America
            </NavLink>
            <NavLink className="filterLink" to={"/region/asia"}>
              Asia
            </NavLink>
            <NavLink className="filterLink" to={"/region/europe"}>
              Europe
            </NavLink>
            <NavLink className="filterLink" to={"/region/oceania"}>
              Oceania
            </NavLink>
          </ul>
        </nav>
      </div>
    </motion.section>
  );
}

export default Search;
