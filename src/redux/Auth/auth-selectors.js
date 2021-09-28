const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.email;
const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getIsLoggedIn,
  getUserEmail,
  getIsFetchingCurrentUser,
};
