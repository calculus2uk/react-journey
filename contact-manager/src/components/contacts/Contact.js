import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowHandler = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  /* 
  onDeleteClick = (id, dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'delete'
    }).then(res => res.json());

    //this.props.onDeleteClickHandler();
    // dispatch({ type: 'DELETE_CONTACT', payload: id });
  }; */

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }

    //this.props.onDeleteClickHandler();
  };

  render() {
    //const { name, email, phone } = this.props;
    const { contact } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {contact.name}
                <i onClick={this.onShowHandler} className="fas fa-sort-down" />
                <i
                  onClick={this.onDeleteClick.bind(this, contact.id, dispatch)}
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                />
                <Link to={`contacts/edit/${contact.id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem'
                    }}
                  />
                </Link>
              </h4>
              {this.state.showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{contact.email}</li>
                  <li className="list-group-item">{contact.phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  //name: PropTypes.string.isRequired,
  //email: PropTypes.string.isRequired,
  //phone: PropTypes.string.isRequired
  contact: PropTypes.object.isRequired
  //onDeleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
