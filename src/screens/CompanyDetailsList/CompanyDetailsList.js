import React, { Fragment, useState, useEffect } from "react";

import ProjectButton from "./components/ProjectButton";
import ProjectDetaisList from "../ProjectDetailsList/ProjectDetailsList";

const CompanyDetailsList = ({
  UpdateProject,
  state,
  address,
  company,
  projects,
  employees,
  setCurrentlyOpennedCompany,
}) => {
  const [currentlyOpennedProject, setCurrentlyOpennedProject] = useState(false);

  useEffect(() => {
    setCurrentlyOpennedProject(false);
  }, [company]);

  return (
    <Fragment>
      <div className="treeContainer">
        <div className="treeTitle">
          {"Company: "}
          <button
            onClick={() => {
              setCurrentlyOpennedCompany(false);
            }}
          >
            X
          </button>
          <br />
          {company.name}
        </div>
        <div className="treeTitle">Address</div>
        <div className="addressDepartmentTitle">
          <div>{address.country}</div>
          <div>{address.state}</div>
          <div>{address.street}</div>
        </div>

        {projects && projects.length > 1 ? (
          <Fragment>
            <div className="treeTitle">Projects</div>
            {projects.map((project, index) => {
              return (
                <ProjectButton
                  key={project.id}
                  project={project}
                  setCurrentlyOpennedProject={setCurrentlyOpennedProject}
                ></ProjectButton>
              );
            })}
          </Fragment>
        ) : (
          <div className="treeTitle">No Present Projects</div>
        )}
      </div>

      {currentlyOpennedProject && (
        <ProjectDetaisList
          project={currentlyOpennedProject}
          employees={employees}
          setCurrentlyOpennedProject={setCurrentlyOpennedProject}
          state={state}
          UpdateProject={UpdateProject}
        ></ProjectDetaisList>
      )}
    </Fragment>
  );
};

export default CompanyDetailsList;
