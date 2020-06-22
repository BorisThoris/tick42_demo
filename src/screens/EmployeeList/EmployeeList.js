import React, { useState, useEffect } from "react";

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
  }, []);

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
            projectsPartOf.map((project, index) => {
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

export default EmployeeList;
