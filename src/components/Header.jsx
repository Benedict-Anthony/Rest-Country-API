import React from "react";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header({ toggleTheme }) {
  return (
    <div>
      <header className="header">
        <div className="container">
          <Link className="link" to={"/"}>
            Where in the world?
          </Link>
          <div className="toggle" onClick={toggleTheme}>
            <FaMoon />
            <span>Dark Mode </span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
