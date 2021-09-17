import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactsSelectors from '../../redux/Contacts/contacts-selectors';
import { changeFilter } from '../../redux/Contacts/contacts-actions';

import styles from './Filter.module.scss';

function Filter({ value, onChange }) {
  return (
    <form className={styles.form}>
      <label>
        <p>Find contacts by name</p>
        <input type="text" value={value} onChange={onChange} />
      </label>
    </form>
  );
}

const mapStateToProps = state => ({
  value: ContactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
