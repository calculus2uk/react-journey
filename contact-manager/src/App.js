import React, { Component } from 'react';
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import AddContacts from './components/contacts/AddContacts';
import EditContact from './components/contacts/EditContact';
import About from './components/pages/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './components/pages/PageNotFound';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contacts/add" component={AddContacts} />
                <Route
                  exact
                  path="/contacts/edit/:id"
                  component={EditContact}
                />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
