import React from "react";
import "./Header.scss";

const Header = props => (
  <div>
    <h1 className="Header">{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
  </div>
);

Header.defaultProps = {
  title: "Indecision"
};

export default Header;
