import React, { useState, useEffect } from "react";

import CompanyListCss from "../../sharedScreenStyles/index.css";

import CompanyButton from "./components/CompanyButton";
import DetailsList from "../CompanyDetailsList/CompanyDetailsList";

const CompaniesList = ({ GetInitialData, UpdateProject, state }) => {
  const [currentlyOpennedCompany, setCurrentlyOpennedCompany] = useState(false);
  const [currentCompanyProjects, setCurrentCompanyProjects] = useState(false);
  const [currentCompanyEmployees, setCurrentCompanyEmployees] = useState(false);

  const [companies, setComapnies] = useState(false);
  const [projects, setProjects] = useState(false);
  const [employees, setEmployees] = useState(false);
  const [companyAddresses, setCompanyAddresses] = useState(false);

  useEffect(() => {
    if (!state.home.data) {
      GetInitialData();
    }

    setComapnies(state.home.data.companies);
    setProjects(state.home.data.projects);
    setEmployees(state.home.data.employees);
    setCompanyAddresses(state.home.data["company-addresses"]);
  }, [state.home.data]);

  useEffect(() => {
    if (projects) {
      const currentProjects = projects.filter(
        (project) => project.companyId === currentlyOpennedCompany.id
      );
      const currentEmployees = employees.filter(
        (employee) => employee.companyId === currentlyOpennedCompany.id
      );

      console.log(currentEmployees);

      setCurrentCompanyEmployees(currentEmployees);
      setCurrentCompanyProjects(currentProjects);
    }
  }, [currentlyOpennedCompany, projects]);

  return (
    <div className="treeWrapper">
      <div className="treeContainer">
        <div className="treeTitle">Companies</div>
        {companies
          ? companies.map((company, index) => {
              return (
                <CompanyButton
                  key={company.id}
                  company={company}
                  setCurrentlyOpenned={setCurrentlyOpennedCompany}
                ></CompanyButton>
              );
            })
          : null}
      </div>

      {currentlyOpennedCompany && (
        <DetailsList
          address={companyAddresses.find(
            (x) => currentlyOpennedCompany.id === x.companyId
          )}
          setCurrentlyOpennedCompany={setCurrentlyOpennedCompany}
          company={currentlyOpennedCompany}
          projects={currentCompanyProjects}
          employees={currentCompanyEmployees}
          state={state}
          UpdateProject={UpdateProject}
        ></DetailsList>
      )}
    </div>
  );
};

export default CompaniesList;
