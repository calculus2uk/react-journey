import React, { Component } from 'react';

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

  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, email, phone } = this.state;
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
          <form onSubmit={this.onFormSubmit}>
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
  }
}
export default AddContacts;
