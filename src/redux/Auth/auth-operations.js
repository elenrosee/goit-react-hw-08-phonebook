import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credenteils => {
  try {
    const { data } = await axios.post('/users/signup', credenteils);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logIn = createAsyncThunk('auth/login', async credenteils => {
  try {
    const { data } = await axios.post('/users/login', credenteils);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

// const userSignup = () => dispatch => {
//   dispatch(userSignupRequest());

//   axios()
//     .then(response => {
//       console.log(response);
//       dispatch(userSignupSuccess(response));
//     })
//     .catch(error => {
//       dispatch(userSignupError(error));
//     });
// };

// eslint-disable-next-line import/no-anonymous-default-export
export default { register, logIn, logOut };
