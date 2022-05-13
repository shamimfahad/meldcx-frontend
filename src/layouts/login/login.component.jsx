import { useState } from 'react';
import { login } from '../../helpers/loginHelper';

import {
  StyledLogin,
  StyledLoginHeader,
  StyledLoginForm,
  StyledLoginButton,
  StyledErrorText,
} from './login.styles';

const Login = ({ setToken, ...props }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const setTokenCallBackFn = (token) => {
    setToken(token);
    setLoading(false);
  };

  const setErrorCallBackFn = (error) => {
    setError(error);
    setLoading(false);
  };

  const handleChange = (e) => {
    setError('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = formData;
    login(email, password, setTokenCallBackFn, setErrorCallBackFn);
  };

  return (
    <StyledLogin>
      <StyledLoginForm onSubmit={handleSubmit}>
        <StyledLoginHeader>Login</StyledLoginHeader>
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
        {!!error && <StyledErrorText>{error}</StyledErrorText>}
        <StyledLoginButton
          disabled={
            formData.email.length === 0 || formData.password.length === 0
          }
        >
          {loading ? 'Logging in' : 'Login'}
        </StyledLoginButton>
      </StyledLoginForm>
    </StyledLogin>
  );
};

export default Login;
