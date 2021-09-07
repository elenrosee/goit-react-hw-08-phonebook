import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactsActions from '../redux/FormInput/contacts-actions';
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
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
