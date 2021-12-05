import React from "react";
import PropTypes from "prop-types";
import "./boardcontent.scss";
import Column from "components/columns/column";
Boardcontent.propTypes = {};

function Boardcontent(props) {
  return (
    <div className="board-content">
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
    </div>
  );
}

export default Boardcontent;
