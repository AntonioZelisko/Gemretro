import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ filter, setFiltering }) => {
    const items = useSelector(state => state.items);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger fixed-top">
            <Link to="/" className="navbar-brand text-white">
                 GEMRETRO
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="ml-auto cart">
                    <div>
                        <form className="search form-inline my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Recherche"
                                aria-label="Recherche"
                                onChange={ e => {
                                    setFiltering(e.target.value.length > 0);
                                    filter(e.target.value);
                                }}
                            />
                        </form>
                    </div>
                    <div className="menu-right">
                        <Link to='/cart'>
                            <i className="fas fa-shopping-bag fa-2x grey" />
                            <span className="badge badge-pill badge-success" >{ items.length > 0 && items.length }</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;