import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';
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
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter Name ..."
                      onChange={this.onFieldChange}
                      value={name}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email ..."
                      onChange={this.onFieldChange}
                      value={email}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter phone ..."
                      onChange={this.onFieldChange}
                      value={phone}
                    />
                  </div>
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
