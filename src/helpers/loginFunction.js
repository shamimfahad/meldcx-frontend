import axios from 'axios';

export const LoginFunction = async (email, password, callbackFn) => {
  try {
    const response = await axios.post('http://35.201.2.209:8000/login', {
      email,
      password,
    });
    console.log(response);
    if (response.status === 200) {
      callbackFn(response.data);
    }
  } catch (error) {
    console.log(error.response.data);
  }
};
