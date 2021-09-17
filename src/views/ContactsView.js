import { Fragment } from 'react';
import ContactForm from '../components/ContactForm';
import ContactsList from '../components/ContactsList';

export default function ContactsView() {
  return (
    <Fragment>
      <ContactForm />
      <ContactsList />
    </Fragment>
  );
}
