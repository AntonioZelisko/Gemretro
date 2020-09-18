import React from "react";
import ListCardProduct from "../products/ListCardProduct";

const Store = ({ category, brands }) => {
  return (
    <div className="col-sm">
      <div className="row">
        <ListCardProduct category={category} brands={brands} />
      </div>
    </div>
  );
};

export default Store;
