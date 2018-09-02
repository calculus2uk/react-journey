import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
  /*   onDeleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({ contacts: newContacts });
  }; */

  state = {
    searchContact: ''
  };

  searchContactHandler = e => {
    this.setState({ searchContact: e.target.value });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          const copyContacts = { ...contacts };
          let transformedfilteredContacts = Object.values(copyContacts).filter(
            contact => {
              return contact.name
                .toLowerCase()
                .includes(this.state.searchContact.toLocaleLowerCase());
            }
          );
          console.log(transformedfilteredContacts);

          return (
            <React.Fragment>
              <h4 className="display-3">Contacts Lists</h4>

              <input
                type="text"
                onChange={this.searchContactHandler}
                className="input-group card card-body mb-3"
                placeholder="Enter Name to Search"
              />
              {transformedfilteredContacts.map(contact => (
                <Contact
                  key={contact.id}
                  //name={contact.name}
                  //email={contact.email}
                  //phone={contact.phone}
                  // this is just a slight cleanup. Note modification must be done in the
                  // Contact component as well or else it will not work
                  contact={contact}
                  /* BIND OR ANNONYMOUS FUNCTION */
                  //onDeleteClickHandler={this.onDeleteContact.bind(this, contact.id)}
                  // onDeleteClickHandler={() => this.onDeleteContact(contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );

    // Here contacts is pulled out from the state NOT SET
    // THIS WILL BE UNDEFINED const {contacts} = this.state.contacts
    //const { contacts } = this.state;
    //console.log(contacts);
    /* 
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            //name={contact.name}
            //email={contact.email}
            //phone={contact.phone}
            // this is just a slight cleanup. Note modification must be done in the
            // Contact component as well or else it will not work
            contact={contact}
            /* BIND OR ANNONYMOUS FUNCTION */
    //onDeleteClickHandler={this.onDeleteContact.bind(this, contact.id)}
    // onDeleteClickHandler={() => this.onDeleteContact(contact.id)}
    // />
    //))}
    //</React.Fragment>
    //); */
  }
}

export default Contacts;
