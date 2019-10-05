import React, { Component } from "react";
import "./App.css";
import "./index.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import p from "./p";
import CardList from './CardList';
import 'tachyons';
import {planets} from './planets';
import SearchBox from './SearchBox';

class App extends Component {
  render() {
    return (
      <div className="App">
<div className='tc ' >
  <h1 className='f1' >SpaceX</h1>
  
  <SearchBox/>
  <CardList/>

  </div></div>

    );
  }
}

export default App;