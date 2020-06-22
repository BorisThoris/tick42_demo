import React, { useState, useEffect } from "react";
import CompanyButtonCss from "./CompanyButton.css";

const CompanyButton = ({
  GetInitialData,
  company,
  setCurrentlyOpenned,
  address,
}) => {
  return (
    <div
      key={company.id}
      className={"container"}
      onClick={() => {
        setCurrentlyOpenned(company);
      }}
    >
      <h1>{company.name}</h1>
    </div>
  );
};

export default CompanyButton;
