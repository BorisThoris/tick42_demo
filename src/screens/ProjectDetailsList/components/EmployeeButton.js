import React from "react";
import PropTypes from "prop-types";

const EmployeeButton = ({ employee, onClick, spliceEmployee }) => {
  return (
    <div className="childTitle" style={{ display: "flex" }}>
      <button
        className="childButtonContainer"
        style={{ marginBottom: "0px" }}
        onClick={onClick}
      >{`${employee.firstName} ${employee.lastName} `}</button>
      <button
        onClick={() => {
          spliceEmployee(employee);
        }}
      >
        X
      </button>
    </div>
  );
};

EmployeeButton.propTypes = {
  employee: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  spliceEmployee: PropTypes.func.isRequired,
};

export default EmployeeButton;
