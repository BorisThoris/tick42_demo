import React, { useState, useEffect } from "react";
import ComponentButtonCss from "./ComponentButton.css";

const ComponentButton = ({ GetInitialData, employee, setCurrentlyOpenned }) => {
  const [companies, setCompanies] = useState(false);

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

export default ComponentButton;
