import React, { useState, useEffect } from "react";
import ownCss from "./AreaModal.css";

const AreaModal = ({ currentState, closeModal, jobArea }) => {
  const [jobAreaEmployee, setJobAreaEmployees] = useState(false);
  const [projectsNumb, setProjectsNumb] = useState(false);

  useEffect(() => {
    const tempEmployees = currentState.employees.filter(
      (employee) => employee.jobArea === jobArea
    );
    setJobAreaEmployees(tempEmployees);

    let numb = 0;

    for (let project of currentState.projects) {
      for (let employee of tempEmployees) {
        if (project.employeesId.includes(employee.id)) {
          numb++;
        }
      }
    }

    setProjectsNumb(numb);
  }, []);

  return (
    <div
      className="areaModalBackTrop"
      onClick={() => {
        closeModal();
      }}
    >
      <div className="areaModal">
        {`Job Area: ${jobArea}`}
        <br />
        {`Employees: ${jobAreaEmployee.length}`}
        <br />
        {`Projects Taken Part In: ${projectsNumb}`}
      </div>
    </div>
  );
};

export default AreaModal;
