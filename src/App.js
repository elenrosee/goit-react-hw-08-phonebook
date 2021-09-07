import { Fragment } from 'react';

import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';

export default function App() {
  return (
    <Fragment>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactsList />
    </Fragment>
  );
}
