import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light ">
     
      <div className="collapse navbar-collapse show ml-sm-5">
        <ul className="navbar-nav">
          <li className="nav-item active ">
            <Link className="nav-link" to="/Home">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/recipes">
              Recipes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
