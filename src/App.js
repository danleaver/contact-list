import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import Contacts from './components/contacts/Contacts';
import ContactForm from './components/contacts/ContactForm';

class App extends Component {
  state = { contacts: [
    { id: 1, firstName: 'John', phone: '123-123-1233'},
    { id: 2, firstName: 'Sally', phone: '123-333-1233'},
    { id: 3, firstName: 'Alex', phone: '123-125-1233'},
  ]}


  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };


  addContact = (incomingContact) => {
    const { contacts } = this.state
    const newContact = { id: this.getId(), ...incomingContact }
    this.setState ({ contacts: [newContact, ...contacts ]})
  }
  render() {
    const { contacts } = this.state
    return(
      <div>
        <ContactForm addContact={this.addContact}/>
        <Header size="huge" color='blue' textAlign='center'>
          Contact list
        </Header>
        <Contacts contacts={contacts} />
      </div>
    )
  }
}
export default App;