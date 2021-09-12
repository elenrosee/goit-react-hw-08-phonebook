import Filter from '../Filter';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.scss';
import ContactsOperations from '../redux/Contacts/contacts-operations';

import Notification from '../Notification';
import { Fragment, useEffect } from 'react';

function ContactsList({ contacts, fetchContacts, onDeleteContact }) {
  useEffect(() => {
    fetchContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {contacts.length > 0 ? (
        <Fragment>
          <Filter />
          <ul className={styles.contact_list}>
            {contacts.map(({ name, number, id }) => (
              <li key={id} className={styles.contact_item}>
                <span>
                  {name}: {number}
                </span>
                <button
                  type="button"
                  onClick={() => onDeleteContact(id)}
                  className={styles.button}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </Fragment>
      ) : (
        <Notification message="Empty contacts list" />
      )}
    </Fragment>
  );
}

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => {
  const { contacts, filter } = state.contacts;
  const visibleContacts = getVisibleContacts(contacts, filter);

  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(ContactsOperations.deleteContact(id)),
  fetchContacts: () => dispatch(ContactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
