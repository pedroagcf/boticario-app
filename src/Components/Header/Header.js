import React from "react";
import { NavLink } from "react-router-dom";

import GoToCartIcon from "../GoToCartIcon/GoToCartIcon"

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <NavLink exact to="/">
          minha loja
        </NavLink>{" "}
      </h1>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__list__item">
            <NavLink to="/perfumaria">perfumaria</NavLink>{" "}
          </li>
          <li className="header__nav__list__item">
            <NavLink to="/maquiagem">maquiagem</NavLink>{" "}
          </li>
          <li className="header__nav__list__item">
            <NavLink to="/cabelos">cabelos</NavLink>{" "}
          </li>
          <li className="header__nav__list__item">
            <NavLink to="/infantil">infantil</NavLink>{" "}
          </li>
        </ul>
      </nav>
      <GoToCartIcon />
      {/* <span className="header__goToCart"></span> */}
    </header>
  );
};

export default Header;
