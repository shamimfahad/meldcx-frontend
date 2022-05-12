import { Column } from '../utils/utllComponents.styles';
import { StyledRotator, StyledDevice } from './rotator.styles';

const Rotator = ({ devices }) => {
  let desiredAngle = 360 / devices?.length;
  let currentAngle = 0;

  return (
    <StyledRotator>
      {devices &&
        devices.map((device, i) => {
          currentAngle = currentAngle + desiredAngle;
          return (
            <StyledDevice
              angle={currentAngle}
              index={i}
              key={device.id}
              style={{
                transform: `rotate(${currentAngle}deg) translate(250px) rotate(${-currentAngle}deg)`,
              }}
            />
          );
        })}
      <Column alignItems={`center`}>
        <div style={{ fontSize: '2rem' }}>{`${devices?.length}`}</div>
        <div>Devices</div>
        <div>Online</div>
      </Column>
    </StyledRotator>
  );
};

export default Rotator;
