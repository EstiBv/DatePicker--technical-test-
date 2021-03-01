import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";
class Header extends React.Component {
  render() {
    return (
      <Link to="/">
        <div className="iconHome"></div>
        <div className="iconHome"></div>
        <div className="iconHome"></div>
      </Link>
    );
  }
}

export default Header;
