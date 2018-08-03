import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@email.com',
        phone: '111-1111-1111'
      },
      {
        id: 2,
        name: 'Karen Smith',
        email: 'karen.smith@email.com',
        phone: '222-222-2222'
      },
      {
        id: 3,
        name: 'James Williams',
        email: 'james.williams@email.com',
        phone: '333-3333-3333'
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
