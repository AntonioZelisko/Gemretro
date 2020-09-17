import React from "react";

const Sony = ({ changeCategory, category }) => {
  const links = [
    { name: "PlayStation", category: "playstation" },
    { name: "PlayStation 2", category: "playstation_2" },
    { name: "PlayStation 3", category: "playstation_3" },
    { name: "PlayStation 4", category: "playstation_4" }
  ];

  return (
    <div className="btn-group dropdown ">
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Sony
      </button>
      <div className="dropdown-menu">
        <ul>
          {links.map((link, index) => (
            <li
              className={`${link.category === category && "active"} `}
              key={index}
              onClick={() => changeCategory(link.category)}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sony;
