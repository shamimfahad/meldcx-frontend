import styled, { keyframes } from 'styled-components';
import { AlignAndJustifyCenter, Column } from '../utils/utllComponents.styles';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledDevice = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  margin: calc(-50px / 2);
  background: #fff;
  border-radius: 50%;
`;

export const StyledRotator = styled(AlignAndJustifyCenter)`
  position: relative;
  width: 500px;
  height: 500px;
  margin: calc(100px / 2 + 0px);

  animation: ${rotate} 6s linear infinite;

  ${Column} {
    animation: ${rotate} 6s linear infinite;
    animation-direction: reverse;
  }
`;
