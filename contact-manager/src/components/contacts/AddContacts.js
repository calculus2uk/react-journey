import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';

class AddContacts extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onFieldChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  onFormSubmit = (dispatch, event) => {
    event.preventDefault();
    const { name, email, phone } = this.state;

    const newContact = { id: uuid(), name, email, phone };
    dispatch({ type: 'ADD_CONTACT', payload: newContact });

    // CLEAR THE INPUT FIELDS
    this.setState({ name: '', email: '', phone: '' });
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">
                Add Contact
                <i
                  className="fas fa-sort-down"
                  style={{ float: 'right', color: 'red' }}
                />
              </div>
              <div className="card-body">
                <form onSubmit={e => this.onFormSubmit(dispatch, e)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onFieldChange={this.onFieldChange}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeholder="Enter Email"
                    type="email"
                    value={email}
                    onFieldChange={this.onFieldChange}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onFieldChange={this.onFieldChange}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContacts;
