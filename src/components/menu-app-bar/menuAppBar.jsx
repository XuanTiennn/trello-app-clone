import React from "react";
import "./menuAppBar.scss";
MenuAppBar.propTypes = {};

function MenuAppBar({ props = [] }) {
  return (
    <div className="menu-app-bar">
      <ul className="menu-list">
        {props.map((item) => ( 
          <li className="list-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuAppBar;
