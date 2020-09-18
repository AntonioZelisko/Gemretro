import React from "react";
import CardProduct from "./CardProduct";

const ListCardProduct = ({ nintendo, sony }) => {
  return (
    <div className="col-sm ">
      <div className={`row d-flex ${nintendo ? "" : "justify-content-center"}`}>
        {nintendo ? (
          nintendo.map((product, index) => (
            <CardProduct key={index} product={product} />
          ))
        ) : (
          <i className="text-danger"></i>
        )}
      </div>
      <div className={`row d-flex ${sony ? "" : "justify-content-center"}`}>
        {sony ? (
          sony.map((product, index) => (
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
