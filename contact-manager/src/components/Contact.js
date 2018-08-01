import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowHandler = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = () => {
    this.props.onDeleteClickHandler();
  };

  render() {
    //const { name, email, phone } = this.props;
    const { contact } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>
          {contact.name}
          <i onClick={this.onShowHandler} className="fas fa-sort-down" />
          <i
            onClick={this.onDeleteClick}
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
          />
        </h4>
        {this.state.showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">{contact.email}</li>
            <li className="list-group-item">{contact.phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  //name: PropTypes.string.isRequired,
  //email: PropTypes.string.isRequired,
  //phone: PropTypes.string.isRequired
  contact: PropTypes.object.isRequired,
  onDeleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
