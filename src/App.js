import {
  // useState,
  Fragment,
} from 'react';

import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactsList from './components/ContactsList';
// import Notification from './components/Notification';

export default function App() {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // function contactsFromLocalStorage() {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  // }

  // const formSubmitHandler = data => {
  //   contacts.find(({ name }) => name.toLowerCase() === data.name.toLowerCase())
  //     ? alert(`${data.name} is already in contacts`)
  //     : setContacts(prevState => [...[data], ...prevState]);
  // };

  return (
    <Fragment>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {/* {contacts.length > 0 ? ( */}
      <Fragment>
        <Filter />
        <ContactsList />
      </Fragment>
      {/* ) : (
        <Notification message="Empty contacts list" />
      )} */}
    </Fragment>
  );
}
