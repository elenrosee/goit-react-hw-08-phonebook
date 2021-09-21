import { useDispatch, useSelector } from 'react-redux';
import ContactsSelectors from '../../redux/Contacts/contacts-selectors';
import { changeFilter } from '../../redux/Contacts/contacts-actions';

import styles from './Filter.module.scss';

function Filter() {
  const filterValue = useSelector(state => ContactsSelectors.getFilter(state));
  const dispatch = useDispatch();

  return (
    <form className={styles.form}>
      <label>
        <p>Find contacts by name</p>
        <input
          type="text"
          value={filterValue}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </form>
  );
}

export default Filter;
