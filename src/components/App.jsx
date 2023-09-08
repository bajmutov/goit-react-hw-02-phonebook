import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import initialContacts from './initialContacts.json';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = data => {
    console.log('data', this.state);
    const newUser = {
      id: nanoid(),
      ...data,
    };
    this.setState(({ contacts }) => ({
      contacts: [newUser, ...contacts],
    }));
  };

  changeFilter = e => {
    console.log('this.state', this.state);
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter changeFilter={this.changeFilter} value={this.state.filter} />
        <ContactList userContacts={this.getVisibleContact()} />
      </div>
    );
  }
}

export default App;
