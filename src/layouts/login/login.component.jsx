import { useState } from 'react';

import { MdEmail } from 'react-icons/md';
import { BsFillPatchExclamationFill } from 'react-icons/bs';

import { login } from '../../helpers/loginHelper';

import {
  StyledLogin,
  StyledLoginHeader,
  StyledLoginForm,
  StyledLoginButton,
  StyledErrorText,
  StyledInputWithIcon,
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
        <StyledInputWithIcon>
          <MdEmail />
          <input
            type='email'
            name='email'
            placeholder='Email Address'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </StyledInputWithIcon>
        <StyledInputWithIcon>
          <BsFillPatchExclamationFill />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </StyledInputWithIcon>
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
