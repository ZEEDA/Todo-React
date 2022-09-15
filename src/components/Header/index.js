import React from "react";
import HeadingImg from "../../images/header-bg.jpg";
const Header = () => {
  return (
    <div className="header">
      <span
        className="bg"
        style={{ backgroundImage: `url(${HeadingImg})` }}
      ></span>
      <h1 className="title">To-do APP</h1>
    </div>
  );
};

export default Header;
