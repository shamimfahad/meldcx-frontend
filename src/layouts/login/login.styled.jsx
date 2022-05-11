import styled from 'styled-components';
import { Button, Flex } from '../../components/utlls.styled';

export const LoginContainer = styled(Flex)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  height: fit-content;
  padding: 1rem 2rem;
  background: #fff;
  color: #000;

  > input[type='email'],
  input[type='password'] {
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
`;

export const LoginHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
`;

export const LoginButton = styled(Button).attrs((props) => ({
  type: 'submit',
}))``;
