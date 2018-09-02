import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashBoard from './components/layout/DashBoard';
import AppNavbar from './components/layout/AppNavbar';
import { Provider } from 'react-redux';
import store from './store';
import AddClient from './components/clients/AddClient';
import ClientsDetails from './components/clients/ClientsDetails';
import EditClient from './components/clients/EditClient';
import Login from './components/auth/Login';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './helpers/auth';
import Settings from './components/layout/Settings';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <div className="container">
              <Switch>
                <Route
                  exact
                  path="/"
                  component={UserIsAuthenticated(DashBoard)}
                />
                <Route
                  exact
                  path="/client/add"
                  component={UserIsAuthenticated(AddClient)}
                />
                <Route
                  exact
                  path="/client/:id"
                  component={UserIsAuthenticated(ClientsDetails)}
                />
                <Route
                  exact
                  path="/client/edit/:id"
                  component={UserIsAuthenticated(EditClient)}
                />
                <Route
                  exact
                  path="/login"
                  component={UserIsNotAuthenticated(Login)}
                />
                <Route
                  exact
                  path="/settings"
                  component={UserIsAuthenticated(Settings)}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
