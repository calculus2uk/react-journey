import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  /*   componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ contacts: data }));
  } */

  // Using Axios to do asame thing as fetch did
  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    this.setState({ contacts: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
