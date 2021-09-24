import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactsOperations from '../../redux/Contacts/contacts-operations';
import ContactsSelectors from '../../redux/Contacts/contacts-selectors';
import styles from './ContactForm.module.scss';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state =>
    ContactsSelectors.getAllContacts(state),
  );

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : dispatch(ContactsOperations.addContact({ name, number }));

    reset();
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit} className={styles.contact_form}>
        <label>
          <p className={styles.input_name}>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <p className={styles.input_name}>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            value={number}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
