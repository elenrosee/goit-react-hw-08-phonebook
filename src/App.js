import { useState, useEffect, Fragment } from "react";

import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactsList from "./components/ContactsList";
import Notification from "./components/Notification";

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem("contacts")) ?? []
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (data) => {
    contacts.find(({ name }) => name.toLowerCase() === data.name.toLowerCase())
      ? alert(`${data.name} is already in contacts`)
      : setContacts((prevState) => [...[data], ...prevState]);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };

  return (
    <Fragment>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Fragment>
          <Filter
            value={filter}
            onChange={(e) => setFilter(e.currentTarget.value)}
          />
          <ContactsList
            contacts={getVisibleContacts()}
            onDeleteContact={deleteContact}
          />
        </Fragment>
      ) : (
        <Notification message="Empty contacts list" />
      )}
    </Fragment>
  );
}
