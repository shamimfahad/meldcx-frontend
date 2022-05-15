import styled from 'styled-components';
import {
  Button,
  AlignAndJustifyCenter,
} from '../../components/utils/utllComponents.styles';

export const StyledLogin = styled(AlignAndJustifyCenter)`
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const StyledLoginForm = styled.form`
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

  input[type='email'],
  input[type='password'] {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 4px;
    background: #eceff1;
    padding: 0.5rem;
    margin-bottom: 1rem;
    padding-left: 30px;
    font-size: 0.9rem;
  }
`;

export const StyledLoginHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
`;

export const StyledInputWithIcon = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: 0;
    top: 12px;
    margin-left: 8px;
  }
`;

export const StyledLoginButton = styled(Button).attrs((props) => ({
  type: 'submit',
}))``;

export const StyledErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-align: center;
`;
