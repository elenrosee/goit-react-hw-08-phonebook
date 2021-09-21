import { useDispatch, useSelector } from 'react-redux';
import styles from './UserMenu.module.scss';
import authSelectors from '../../redux/Auth/auth-selectors';
import authOperations from '../../redux/Auth/auth-operations';

function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(authSelectors.getUserEmail);
  return (
    <div>
      <span className={styles.mail}>{userEmail}</span>
      <button
        onClick={() => dispatch(authOperations.logOut())}
        type="submit"
        className={styles.button}
      >
        Log out
      </button>
    </div>
  );
}

export default UserMenu;
