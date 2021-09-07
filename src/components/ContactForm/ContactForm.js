import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactsActions from '../redux/FormInput/contacts-actions';
import { v4 as uuidv4 } from 'uuid';
import styles from './ContactForm.module.scss';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
    onSubmit({ name, number, id: uuidv4() });
    reset();
  };

  return (
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
  );
}

// class ContactForm extends Component {
//   state = {
//     id: '',
//     name: '',
//     number: '',
//   };

//   inputFormId = uuidv4();

//   handleInputChangeEvent = event => {
//     const { name, value } = event.currentTarget;

//     this.setState({ [name]: value, id: uuidv4() });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className={styles.contact_form}>
//         <label>
//           <p className={styles.input_name}>Name</p>
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             value={this.state.name}
//             onChange={this.handleInputChangeEvent}
//             required
//           />
//         </label>
//         <label>
//           <p className={styles.input_name}>Number</p>
//           <input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             value={this.state.number}
//             onChange={this.handleInputChangeEvent}
//             required
//           />
//         </label>
//         <button type="submit" className={styles.button}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(contactsActions.addItem(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
