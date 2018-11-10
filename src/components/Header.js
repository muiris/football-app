import React from "react";
import logo from "./logo.svg";



function Header(props) {
  return (
    <header className="App-header">
          <img src={logo} alt="logo" />
          <h1 className="App-title">Prem Predictor</h1>
        </header>
  ); 
} 

export default Header;