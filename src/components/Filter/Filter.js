import PropTypes from "prop-types";
import styles from "./Filter.module.scss";

export default function Filter({ value, onChange }) {
  return (
    <form className={styles.form}>
      <label>
        <p>Find contacts by name</p>
        <input type="text" value={value} onChange={onChange} />
      </label>
    </form>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
