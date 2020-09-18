import React from "react";
import ListCardProduct from "../products/ListCardProduct";

const Store = ({ category, nintendo, sony }) => {
  return (
    <div className="col-sm">
      <div className="row">
        <ListCardProduct category={category} nintendo={nintendo} sony={sony} />
      </div>
    </div>
  );
};

export default Store;
