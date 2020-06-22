import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";

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
            {projects.map((project) => {
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

CompanyDetailsList.propTypes = {
  UpdateProject: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  address: PropTypes.object.isRequired,
  company: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
  employees: PropTypes.array.isRequired,
  setCurrentlyOpennedCompany: PropTypes.func.isRequired,
};

export default CompanyDetailsList;
