// Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Carbon Footprint Calculator</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/tracker">Tracker</Link>
        <Link to="/suggestions">Suggestions</Link>
      </nav>
    </header>
  );
};

export default Header;
