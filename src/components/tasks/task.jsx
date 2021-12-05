import React from "react";
import PropTypes from "prop-types";
import './task.scss'
Task.propTypes = {};

function Task(props) {
  return (
    <div className="column-item">
      <img src="https://res.cloudinary.com/dzpks7wzs/image/upload/v1626425459/N16_ecommers/qgfdzlhd8reqcruzfzij.jpg" />
      <p className="item-description">description</p>
    </div>
  );
}

export default Task;
