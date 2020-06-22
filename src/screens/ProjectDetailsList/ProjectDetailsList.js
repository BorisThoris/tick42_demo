import React, { Fragment, useState, useEffect } from "react";
import OwnCss from "./ProjectDetailsStyle.css";

import EmployeeButton from "./components/EmployeeButton";
import EmployeesList from "../EmployeeList/EmployeeList";

const ProjectDetailsList = ({
  project,
  employees,
  setCurrentlyOpennedProject,
  state,
  UpdateProject,
}) => {
  const [currentProject, setCurrentProject] = useState(false);
  const [excludedEmployees, setExcludedEmployees] = useState(false);
  const [currentProjectEmployees, setCurrentProjectEmployees] = useState(false);
  const [currentlyOpennedEmployee, setCurrentlyOpennedEmployee] = useState(
    false
  );
  const [editDetailsOpen, setEditDetailsOpen] = useState(false);
  const [currentState, setCurrentState] = useState(false);
  const [inputValue, setInputValue] = useState(currentProject.name);
  const [addEmployeesVisible, setAddEmployeesVisible] = useState(false);

  useEffect(() => {
    setCurrentProject(project);
    setCurrentState(state.home.data);
  }, [project]);

  useEffect(() => {
    if (currentProject) {
      const tempProject = currentState.projects.find((element) => {
        return element.id === currentProject.id;
      });

      const newEmployees = employees.filter((employee) =>
        currentProject.employeesId.includes(employee.id)
      );

      const tempExcludedEmployees = employees.filter(
        (employee) => !currentProject.employeesId.includes(employee.id)
      );

      console.log(tempExcludedEmployees.length > 0);
      console.log(tempExcludedEmployees.length);

      setInputValue(currentProject.name);
      setCurrentProjectEmployees(newEmployees);
      setExcludedEmployees(tempExcludedEmployees);
      setCurrentlyOpennedEmployee(false);
    }
  }, [currentProject]);

  const updateName = () => {
    if (inputValue !== "") {
      const newProject = JSON.parse(JSON.stringify(currentProject));
      const tempState = JSON.parse(JSON.stringify(currentState));
      const foundIndex = tempState.projects.findIndex(
        (x) => x.id == newProject.id
      );

      newProject.name = inputValue;
      tempState.projects[foundIndex] = newProject;

      UpdateProject(tempState);
      setCurrentState(tempState);
      setCurrentProject(tempState.projects[foundIndex]);
    } else alert("No Name Given");
  };

  const spliceEmployee = (user) => {
    const newProject = JSON.parse(JSON.stringify(currentProject));
    const tempState = JSON.parse(JSON.stringify(currentState));
    const foundIndex = tempState.projects.findIndex(
      (x) => x.id == newProject.id
    );

    const newTempEmployees = employees.filter((employee) =>
      newProject.employeesId.includes(employee.id)
    );

    const currentEmployeeIndex = newTempEmployees.findIndex(
      (x) => x.id === user.id
    );

    newTempEmployees.splice(currentEmployeeIndex, 1);
    const tempEmployeeIds = newTempEmployees.map((x) => x.id);

    newProject.employeesId = tempEmployeeIds;
    tempState.projects[foundIndex] = newProject;

    UpdateProject(tempState);
    setCurrentState(tempState);
    setCurrentProject(tempState.projects[foundIndex]);
  };

  const pushEmployee = (employee) => {
    console.log(employee);

    const newProject = JSON.parse(JSON.stringify(currentProject));
    const tempState = JSON.parse(JSON.stringify(currentState));
    const foundIndex = tempState.projects.findIndex(
      (x) => x.id == newProject.id
    );

    newProject.employeesId.push(employee.id);
    tempState.projects[foundIndex] = newProject;

    UpdateProject(tempState);
    setCurrentState(tempState);
    setCurrentProject(tempState.projects[foundIndex]);
  };

  // const addEmploye

  if (currentProject)
    return (
      <Fragment>
        <div className="treeContainer">
          <div className="titleFlex">
            <div>
              <input
                className="treeTitle"
                style={{ marginBottom: "0px" }}
                placeholder={inputValue}
                defaultValue={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              ></input>

              <button
                onClick={() => {
                  setCurrentlyOpennedProject(false);
                }}
              >
                X
              </button>
            </div>

            <button
              onClick={() => {
                updateName();
              }}
            >
              Change Project Name
            </button>
          </div>

          <div className="treeTitle">Department:</div>
          <div className="addressDepartmentTitle">
            {currentProject.department}
          </div>

          {currentProjectEmployees && currentProjectEmployees.length > 0 ? (
            <Fragment>
              <div className="treeTitle">
                Employees: <br />
              </div>
              {currentProjectEmployees.map((employee, index) => {
                return (
                  <EmployeeButton
                    employee={employee}
                    key={employee.id}
                    onClick={() => {
                      setCurrentlyOpennedEmployee(employee);
                    }}
                    spliceEmployee={spliceEmployee}
                  ></EmployeeButton>
                );
              })}
            </Fragment>
          ) : (
            <div className="treeTitle">
              No Employees
              <br />
            </div>
          )}

          {excludedEmployees.length > 0 ? (
            <button
              style={{ marginTop: "10px" }}
              onClick={() => {
                setAddEmployeesVisible(!addEmployeesVisible);
              }}
            >
              Add Employee
            </button>
          ) : null}

          {addEmployeesVisible && excludedEmployees.length !== 0
            ? excludedEmployees.map((item, index) => {
                return (
                  <div key={index}>
                    {`${item.firstName} ${item.lastName} `}
                    <button
                      onClick={() => {
                        pushEmployee(item);
                      }}
                    >
                      +
                    </button>
                  </div>
                );
              })
            : null}
        </div>

        {currentlyOpennedEmployee && (
          <EmployeesList
            employee={currentlyOpennedEmployee}
            currentState={currentState}
            setCurrentlyOpennedEmployee={setCurrentlyOpennedEmployee}
          />
        )}

        {editDetailsOpen && <div>Edit Sad</div>}
      </Fragment>
    );
  else return null;
};

export default ProjectDetailsList;
