import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';
import styles from './ContactsList.module.scss';

import ContactsOperations from '../../redux/Contacts/contacts-operations';
import ContactsSelectors from '../../redux/Contacts/contacts-selectors';
import Filter from '../Filter';
import Notification from '../Notification';

function ContactsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ContactsOperations.fetchContacts());
  }, [dispatch]);

  const allContacts = useSelector(state =>
    ContactsSelectors.getAllContacts(state),
  );

  const visibleContacts = useSelector(state =>
    ContactsSelectors.getVisibleContacts(state),
  );

  return (
    <Fragment>
      <h2>Contacts</h2>
      {allContacts.length > 0 ? (
        <Fragment>
          <Filter />
          <ul className={styles.contact_list}>
            {visibleContacts.length === 0 ? (
              <li>
                <h4>Contact whith this name was not found.</h4>
              </li>
            ) : (
              visibleContacts.map(({ name, number, id }) => (
                <li key={id} className={styles.contact_item}>
                  <span>
                    {name}: {number}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      dispatch(ContactsOperations.deleteContact(id))
                    }
                    className={styles.button}
                  >
                    Delete
                  </button>
                </li>
              ))
            )}
          </ul>
        </Fragment>
      ) : (
        <Notification message="Empty contacts list" />
      )}
    </Fragment>
  );
}

export default ContactsList;
