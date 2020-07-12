import React, { Component } from 'react';
import { IAppProps } from './models/pages/app.d';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreatePortfolio from '../src/pages/create-portfolio';
import Portfolio from '../src/pages/portfolio';
import BackendPayrollPage from '../src/pages/backend-payroll-page';
import './App.scss';

class App extends Component<IAppProps> {

  renderCreatePortfolio = (props: any) => {
    return <CreatePortfolio {...props} />;
  };
  renderPortfolio = (props: any) => {
    return <Portfolio {...props} />;
  };
  renderBackendPayroll = (props: any) => {
    return <BackendPayrollPage {...props} />
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route
            exact={true}
            path={'/'}
            render={this.renderCreatePortfolio}
          />
          <Route
            path={'/portfolio'}
            component={this.renderPortfolio}
          />
          <Route
            path={'/backend/payroll'}
            component={this.renderBackendPayroll}
          />
        </Router>
      </div>
    );
  }
}

export default App;
