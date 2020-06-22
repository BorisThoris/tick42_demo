import React from "react";
import PropTypes from "prop-types";

const ProjectButton = ({ project, setCurrentlyOpennedProject }) => {
  return (
    <div
      className={"childButtonContainer"}
      onClick={() => {
        setCurrentlyOpennedProject(project);
      }}
    >
      <div className={"childTitle"}>{project.name}</div>
    </div>
  );
};

ProjectButton.propTypes = {
  project: PropTypes.object.isRequired,
  setCurrentlyOpennedProject: PropTypes.func.isRequired,
};

export default ProjectButton;
