import React, { Component } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import './style.css';
import 'jquery';
export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/index1.html" className="btn btn-secondary btn-lg " >
          Search Recipes
        </Link>

        </div>
    );
  }
}
