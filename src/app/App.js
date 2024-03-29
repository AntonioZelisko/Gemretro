import React, { useState, useEffect } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/header-footer/Header";
import { nintendo } from "../datas/data_nintendo";
import { sony } from "../datas/data_sony";
import "./styles/App.css";
import Footer from "./components/header-footer/Footer";
import { saveCart } from "./lib/actions";
import Routes from "./Routes";
import UserProfileContextProvider from "./lib/UserProfileContext";

const history = createBrowserHistory();

const App = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("game_boy");
  const [isFiltering, setFiltering] = useState(false);
  const [filtered, setFiltered] = useState(false);

  const brands = nintendo.concat(sony);

  const filterResult = (input) => {
    const fullList = brands.flat();
    const filtered = fullList.filter(
      (i) => i.name.toLowerCase().indexOf(input.toLowerCase()) > -1
    );
    setFiltered(filtered);
  };

  useEffect(() => {
    dispatch(saveCart(items));
  }, [items, dispatch]);

  return (
    <Router history={history}>
      <UserProfileContextProvider>
        <div id="page-container">
          <div id="content-wrap">
            <Header filter={filterResult} setFiltering={setFiltering} />
            <Routes
              isFiltering={isFiltering}
              filtered={filtered}
              brands={brands}
              category={category}
              setCategory={setCategory}
            />
          </div>
          <Footer />
        </div>
      </UserProfileContextProvider>
    </Router>
  );
};

export default App;
