import React from "react";
import logo from "../assets/logo.svg";
import pkg from "../../package.json";

export const Header = () => (
  <header className="app-header">
    <img src={logo} className="app-logo" alt="logo" />
    <a className="app-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      {pkg.name}
    </a>
  </header>
);
