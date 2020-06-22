import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "../../sharedScreenStyles/index.css";

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

    const tempCompanies = state.home.data.companies;
    const tempProjects = state.home.data.projects;
    const tempEmployees = state.home.data.employees;
    const tempCompanyAddresses = state.home.data["company-addresses"];

    setComapnies(tempCompanies);
    setProjects(tempProjects);
    setEmployees(tempEmployees);
    setCompanyAddresses(tempCompanyAddresses);
  }, [state.home.data, GetInitialData]);

  useEffect(() => {
    if (projects) {
      const currentProjects = projects.filter(
        (project) => project.companyId === currentlyOpennedCompany.id
      );
      const currentEmployees = employees.filter(
        (employee) => employee.companyId === currentlyOpennedCompany.id
      );

      setCurrentCompanyEmployees(currentEmployees);
      setCurrentCompanyProjects(currentProjects);
    }
  }, [currentlyOpennedCompany, projects, employees]);

  return (
    <div className="treeWrapper">
      <div className="treeContainer">
        <div className="treeTitle">Companies</div>
        {companies
          ? companies.map((company) => {
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

CompaniesList.propTypes = {
  state: PropTypes.object.isRequired,
  GetInitialData: PropTypes.func.isRequired,
  UpdateProject: PropTypes.func.isRequired,
};

export default CompaniesList;
