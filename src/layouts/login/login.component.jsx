import { useState } from 'react';
import { LoginFunction } from '../../helpers/loginFunction';

import {
  LoginContainer,
  LoginHeader,
  LoginForm,
  LoginButton,
} from './login.styled';

const Login = ({ setToken, ...props }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const setTokenCallBackFn = (token) => {
    setToken(token);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    LoginFunction(email, password, setTokenCallBackFn);
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <LoginHeader>Login</LoginHeader>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
          required
        />
        <LoginButton>Login</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
