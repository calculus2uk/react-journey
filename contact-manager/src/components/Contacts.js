import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
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

  onDeleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({ contacts: newContacts });
  };

  render() {
    // Here contacts is pulled out from the state NOT SET
    // THIS WILL BE UNDEFINED const {contacts} = this.state.contacts
    const { contacts } = this.state;
    //console.log(contacts);
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
            onDeleteClickHandler={() => this.onDeleteContact(contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
