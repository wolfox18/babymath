import React from "react";
import logo from "../../images/owl-logo-min.png";
import "./Header.css";

export const Header = ({onParentsButtonClick}) => {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo-container">
          <img src={logo} alt="Логотип" className="header__logo" />
          <h1 className="header__title">Посчитай!</h1>
        </a>
        <button onClick={onParentsButtonClick} className="header__button">Для родителей</button>
      </div>
    </header>
  );
};
