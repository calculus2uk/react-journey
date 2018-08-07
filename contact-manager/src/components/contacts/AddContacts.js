import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContacts extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: '',
    status: false
  };

  onFieldChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  onFormSubmit = (dispatch, event) => {
    event.preventDefault();
    const { name, email, phone } = this.state;

    //ERROR CHECKING
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone number is required' } });
      return;
    }

    const newContact = { id: uuid(), name, email, phone };
    axios
      .post('https://jsonplaceholder.typicode.com/users', newContact)
      .then(res => dispatch({ type: 'ADD_CONTACT', payload: res.data }));

    // CLEAR THE INPUT FIELDS
    this.setState({ name: '', email: '', phone: '', errors: {} });

    //Redirect to the home page that shows the list
    this.props.history.push('/');
  };

  hideShow = () => {
    this.setState({ status: !this.state.status });
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">
                Add Contact
                <i
                  onClick={this.hideShow}
                  className="fas fa-sort-down"
                  style={{ float: 'right', color: 'red' }}
                />
              </div>
              {this.state.status ? (
                <div className="card-body">
                  <form onSubmit={e => this.onFormSubmit(dispatch, e)}>
                    <TextInputGroup
                      label="Name"
                      name="name"
                      placeholder="Enter Name"
                      value={name}
                      onFieldChange={this.onFieldChange}
                      error={errors.name}
                    />
                    <TextInputGroup
                      label="Email"
                      name="email"
                      placeholder="Enter Email"
                      type="email"
                      value={email}
                      onFieldChange={this.onFieldChange}
                      error={errors.email}
                    />
                    <TextInputGroup
                      label="Phone"
                      name="phone"
                      placeholder="Enter Phone"
                      value={phone}
                      onFieldChange={this.onFieldChange}
                      error={errors.phone}
                    />
                    <input
                      type="submit"
                      value="Add Contact"
                      className="btn btn-light btn-block"
                    />
                  </form>
                </div>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContacts;
