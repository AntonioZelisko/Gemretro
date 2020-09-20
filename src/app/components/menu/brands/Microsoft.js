import React from "react";

const Microsoft = ({ changeCategory, category }) => {
  const links = [
    { name: "Xbox", category: "xbox" },
    { name: "Xbox 360", category: "xbox_360" },
    { name: "Xbox One", category: "xbox_one" }
  ];

  return (
    <div className="btn-group dropdown">
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Microsoft
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
export default Microsoft;