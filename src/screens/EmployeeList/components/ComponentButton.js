import React from "react";
import PropTypes from "prop-types";

import "./ComponentButton.css";

const ComponentButton = ({ employee, setCurrentlyOpenned }) => {
  return (
    <div
      className={"container"}
      onClick={() => {
        setCurrentlyOpenned(true);
      }}
    >
      <h1>{employee.firstName}</h1>
    </div>
  );
};

ComponentButton.propTypes = {
  employee: PropTypes.element.isRequired,
  setCurrentlyOpenned: PropTypes.element.isRequired,
};

export default ComponentButton;
