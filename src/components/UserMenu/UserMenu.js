import styles from './UserMenu.module.scss';

function UserMenu() {
  return (
    <div>
      <span className={styles.mail}>elenaovcharenko14@gmail.com</span>
      <button type="submit" className={styles.button}>
        Log out
      </button>
    </div>
  );
}

export default UserMenu;
