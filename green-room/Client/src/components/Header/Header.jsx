import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <h1>An absolute beauty of a Header bruv</h1>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/sign-up">
        <button>Sign Up</button>
      </Link>
    </div>
  );
}

export default Header;
