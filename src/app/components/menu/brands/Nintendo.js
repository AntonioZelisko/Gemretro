import React from "react";

const Nintendo = ({ changeCategory, category }) => {
  const links = [
    { name: "Game Boy", category: "game_boy" },
    { name: "Super Nintendo", category: "super_nintendo" },
    { name: "Nintendo 64", category: "nintendo_64" },
    { name: "Game Boy Color", category: "game_boy_color" },
    { name: "GameCube", category: "gamecube" },
    { name: "Game Boy Advance", category: "game_boy_advance" },
    { name: "Wii", category: "wii" },
    { name: "Nintendo DS", category: "nintendo_ds" },
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
        Nintendo
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
export default Nintendo;
