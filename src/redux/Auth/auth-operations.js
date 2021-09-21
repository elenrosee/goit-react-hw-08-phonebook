import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = createAsyncThunk('auth/register', async credenteils => {
  try {
    const { data } = await axios.post('/users/signup', credenteils);

    return data;
  } catch (error) {}
});

const logIn = createAsyncThunk('auth/login', async credenteils => {
  try {
    const { data } = await axios.post('/users/login', credenteils);

    return data;
  } catch (error) {}
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
export default { register, logIn };
