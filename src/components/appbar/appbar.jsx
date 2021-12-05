import React from "react";
import PropTypes from "prop-types";
import "./appbar.scss";
import { menuData } from "actions/menu-appbar-data";
import MenuAppBar from "components/menu-app-bar/menuAppBar";
import InputField from "components/inputFiel/inputField";
Appbar.propTypes = {};

function Appbar(props) {
  return (
    <div className="app-bar">
      <h1 className="app-bar-title">Trello</h1>
      <MenuAppBar props={menuData} />
      <InputField props={{type:'text',placeholder:'Tìm kiếm'}} />
    </div>
  );
}

export default Appbar;
