const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getIsLoggedIn,
  getUserName,
};
