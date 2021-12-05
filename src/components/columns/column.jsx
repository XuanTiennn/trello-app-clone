import React from "react";
import PropTypes from "prop-types";
import "./column.scss";
import Task from "components/tasks/task";
Column.propTypes = {};

function Column(props) {
  return (
    <div className="column">
      <p className="title">title</p>

      <div className="column-content">
        <Task />
        <Task />
        <Task />
        <div className="column-item">
          <p className="item-description">description</p>
        </div>
        <div className="column-item">
          <p className="item-description">description</p>
        </div>
      </div>

      <div className="column-footer">+Thêm thẻ</div>
    </div>
  );
}

export default Column;
