import React from "react";
import PropTypes from "prop-types";
import "./CompanyButton.css";

const CompanyButton = ({ company, setCurrentlyOpenned }) => {
  const tempComp = company;

  return (
    <div
      key={tempComp.id}
      className={"container"}
      onClick={() => {
        setCurrentlyOpenned(tempComp);
      }}
    >
      <h1>{tempComp.name}</h1>
    </div>
  );
};

CompanyButton.propTypes = {
  company: PropTypes.object.isRequired,
  setCurrentlyOpenned: PropTypes.func.isRequired,
};

export default CompanyButton;
