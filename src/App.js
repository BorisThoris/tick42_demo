import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CompaniesListContainer from "./screens/CompaniesList/CompaniesListContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={CompaniesListContainer} />
          <Route path="/home" component={CompaniesListContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
