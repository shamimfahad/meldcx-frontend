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
  transform: ${(props) =>
    props.currentAngle && props.rotatorWidth
      ? `rotate(${props.currentAngle}deg) translate(${
          props.rotatorWidth / 2
        }px) rotate(${-props.currentAngle}deg)`
      : 'none'};
`;

export const StyledRotator = styled(AlignAndJustifyCenter)`
  position: relative;
  width: 500px;
  height: 500px;
  margin: calc(50px / 2 + 0px);

  @media screen and (max-width: 500px) {
    width: 300px;
    height: 300px;
  }

  animation: ${rotate} 6s linear infinite;

  ${Column} {
    animation: ${rotate} 6s linear infinite;
    animation-direction: reverse;
    text-align: center;

    span {
      font-size: 2rem;
    }
  }
`;
