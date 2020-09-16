import React from "react";
import "../../styles/App.css";

const SideMenu = ({ changeCategory, category }) => {
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
    <div className="col-sm-1.6 sidebar  bg-light">
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
  );
};

export default SideMenu;
