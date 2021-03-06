import { useState, useEffect, useRef } from 'react';

import { Column } from '../utils/utllComponents.styles';
import { StyledRotator, StyledDevice } from './rotator.styles';

const Rotator = ({ devices }) => {
  const [rotatorWidth, setRotatorWidth] = useState(0);
  const rotatorRef = useRef(null);

  let desiredAngle = 360 / devices?.length;
  let currentAngle = 0;

  useEffect(() => {
    if (rotatorRef.current) {
      setRotatorWidth(rotatorRef.current.offsetWidth);
    }
  }, [rotatorRef]);

  return (
    <StyledRotator ref={rotatorRef} data-testid='rotator-component'>
      {devices &&
        devices.map((device, i) => {
          currentAngle = currentAngle + desiredAngle;
          return (
            <StyledDevice
              currentAngle={currentAngle}
              rotatorWidth={rotatorWidth}
              key={device.id}
              data-testid='device'
            />
          );
        })}
      <Column alignItems={`center`}>
        <span>{`${devices?.length ? devices?.length : 0}`}</span>
        Devices <br /> Online
      </Column>
    </StyledRotator>
  );
};

export default Rotator;
