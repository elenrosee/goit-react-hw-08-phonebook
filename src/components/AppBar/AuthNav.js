import { NavLink } from 'react-router-dom';
import styles from './AppBar.module.scss';

function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        className={styles.button}
        activeClassName={styles.activeButton}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={styles.button}
        activeClassName={styles.activeButton}
      >
        Login
      </NavLink>
    </div>
  );
}

export default AuthNav;
