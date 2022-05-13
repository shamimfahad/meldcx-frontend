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
    <StyledRotator ref={rotatorRef}>
      {devices &&
        devices.map((device, i) => {
          currentAngle = currentAngle + desiredAngle;
          return (
            <StyledDevice
              currentAngle={currentAngle}
              rotatorWidth={rotatorWidth}
              key={device.id}
            />
          );
        })}
      <Column alignItems={`center`}>
        <div style={{ fontSize: '2rem' }}>{`${
          devices?.length ? devices?.length : 0
        }`}</div>
        <div>Devices</div>
        <div>Online</div>
      </Column>
    </StyledRotator>
  );
};

export default Rotator;
