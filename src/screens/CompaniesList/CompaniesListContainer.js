import React from "react";

import { connect } from "react-redux";
import { homeOperations } from "../../duck";

import CompaniesListComponent from "./CompaniesList";

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  const GetInitialData = () => dispatch(homeOperations.fetchInitialData());
  const UpdateProject = (data) => dispatch(homeOperations.updateProject(data));

  return {
    GetInitialData,
    UpdateProject,
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompaniesListComponent);

function CompaniesListContainer() {
  return <Container></Container>;
}

export default CompaniesListContainer;
