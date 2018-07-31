import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact
          name="John Doe"
          email="john.doe@gmail.com"
          phone="333-333-333"
        />
        <Contact
          name="Karen Smith"
          email="karen.smith@gmail.com"
          phone="555-555-5555"
        />
      </div>
    );
  }
}

export default App;
