import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import AreaModal from "./components/AreaModal";

const EmployeeList = ({
  currentState,
  employee,
  setCurrentlyOpennedEmployee,
}) => {
  const [projectsPartOf, setProjectsPartOf] = useState(false);
  const [areaModalOpen, setAreaModalOpen] = useState(false);

  useEffect(() => {
    const tempProjects = currentState.projects.filter((project) =>
      project.employeesId.includes(employee.id)
    );

    setProjectsPartOf(tempProjects);
  }, [currentState, employee]);

  return (
    <div className="treeWrapper">
      <div className="treeContainer">
        <div className="treeTitle">
          {`Employee: `}
          <button
            onClick={() => {
              setCurrentlyOpennedEmployee(false);
            }}
          >
            X
          </button>
          <br /> {`${employee.firstName} ${employee.lastName}`}
        </div>

        <div className="treeTitle"> Employee Datails </div>

        <div className="treeTitle"> Job Area: </div>
        <div className="addressDepartmentTitle">
          <button
            onClick={() => {
              setAreaModalOpen(!areaModalOpen);
            }}
          >
            {employee.jobArea}
          </button>
        </div>

        <div className="treeTitle"> Job Title: </div>
        <div className="addressDepartmentTitle">{employee.jobTitle}</div>

        <div className="treeTitle"> Job Type: </div>
        <div className="addressDepartmentTitle">{employee.jobType}</div>

        <div className="treeTitle">
          Part of projects:
          {projectsPartOf &&
            projectsPartOf.map((project) => {
              return (
                <div key={project.name} className={"addressDepartmentTitle"}>
                  {project.name}
                </div>
              );
            })}
        </div>
      </div>

      {areaModalOpen && (
        <AreaModal
          closeModal={() => {
            setAreaModalOpen(!areaModalOpen);
          }}
          currentState={currentState}
          jobArea={employee.jobArea}
        ></AreaModal>
      )}
    </div>
  );
};

EmployeeList.propTypes = {
  currentState: PropTypes.object.isRequired,
  employee: PropTypes.object.isRequired,
  setCurrentlyOpennedEmployee: PropTypes.func.isRequired,
};

export default EmployeeList;
