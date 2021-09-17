import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import styles from './AppBar.module.scss';

function AppBar() {
  return (
    <div className={styles.AppBar}>
      <nav>
        <NavLink
          exact
          to="/"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          HomePage
        </NavLink>
        <NavLink
          to="/register"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Login
        </NavLink>
        <NavLink
          to="/contacts"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Contacts
        </NavLink>
      </nav>
      <UserMenu />
    </div>
  );
}

export default memo(AppBar);

// /register - публичный маршрут регистрации нового пользователя с формой
// /login - публичный маршрут логина сущестующего пользователя с формой
// /contacts - приватный маршрут для работы с коллекцией контактов пользователя
