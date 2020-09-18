import React from "react";
import CardProduct from "./CardProduct";

const ListCardProduct = ({ brands }) => {
  return (
    <div className="col-sm ">
      <div className={`row d-flex ${brands ? "" : "justify-content-center"}`}>
        {brands ? (
          brands.map((product, index) => (
            <CardProduct key={index} product={product} />
          ))
        ) : (
          <i className="text-danger"></i>
        )}
      </div>
    </div>
  );
};

export default ListCardProduct;
