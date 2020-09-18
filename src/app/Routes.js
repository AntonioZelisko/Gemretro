import React from "react";
import { Route } from "react-router-dom";
import Menu from "./views/Menu";
import CartPage from "./views/CartPage";
import CheckoutPage from "./views/CheckoutPage";

const Routes = ({
  isFiltering,
  filtered,
  brands,
  category,
  setCategory,
}) => {
  return (
    <>
      <Route
        exact
        path="/"
        component={(props) => (
          <Menu
            brands={
              isFiltering
                ? filtered
                : brands[
                    brands.findIndex((d) => d[0].category === category)
                  ]
            }
            changeCategory={setCategory}
            category={!isFiltering && category}
          />
        )}
      />
      <Route path="/cart" component={CartPage} />
      <Route path="/checkout" component={CheckoutPage} />
    </>
  );
};

export default Routes;
