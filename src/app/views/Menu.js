import React from "react";
import SideMenu from "../components/menu/SideMenu";
import Store from "./../components/menu/Store";

const Menu = ({ category, changeCategory, brands }) => {
  return (
    <div className="container">
      <div className="row">
        <SideMenu changeCategory={changeCategory} category={category} />
        <Store brands={brands} category={category} />
      </div>
    </div>
  );
};

export default Menu;
