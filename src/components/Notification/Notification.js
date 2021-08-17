import PropTypes from "prop-types";
import styles from "./Notification.module.scss";

export default function Notification({ message }) {
  return <h3 className={styles.title}>{message}</h3>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
