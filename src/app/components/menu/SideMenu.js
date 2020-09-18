import React from "react";
import Nintendo from "./brands/Nintendo";
import Sony from "./brands/Sony";
import "../../styles/App.css";

const SideMenu = ({ changeCategory, category }) => {
  return (
    <div className="col-sm-1 sidebar bg-light d-flex align-items-end flex-column bd-highlight mb-3 p-3">
      <Nintendo changeCategory={changeCategory} category={category} />
      <Sony changeCategory={changeCategory} category={category} />
    </div>
  );
};

export default SideMenu;
