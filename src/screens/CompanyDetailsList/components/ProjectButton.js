import React from "react";

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

export default ProjectButton;
