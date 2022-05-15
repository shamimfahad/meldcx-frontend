import axios from 'axios';

/**
 * @param  {string} email
 * @param  {string} password
 * @param  {function} setTokenCallBackFn
 * @param  {function} setErrorCallBackFn
 */

export const login = async (
  email,
  password,
  setTokenCallBackFn,
  setErrorCallBackFn
) => {
  try {
    const response = await axios.post(
      'http://35.201.2.209:8000/login',
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.status === 200) {
      setTokenCallBackFn(response.data);
      localStorage.setItem('token', response.data);
    }
  } catch (error) {
    setErrorCallBackFn(error.response.data);
  }
};
