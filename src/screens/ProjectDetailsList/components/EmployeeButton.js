import React, { useState } from "react";

const EmployeeButton = ({ employee, onClick, spliceEmployee }) => {
  const [currentProjectEmployees, setCurrentProjectEmployees] = useState(false);

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

export default EmployeeButton;
