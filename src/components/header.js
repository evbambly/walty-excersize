import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="App-link">
          <Link to="/" >Home</Link>
          <span>&nbsp;|&nbsp;</span>
          <Link to="/search">Results</Link>
      </div>
    </header>
  );
}

export default Header;
