import { useState, useEffect } from 'react';

import Rotator from '../../components/rotator/rotator.component';

import { StyledDevices } from './devices.styles';
import useGetDevices from '../../helpers/useGetDevices';

const Devices = () => {
  const [devices, setDevices] = useState(undefined);

  const { data, error, isLoading } = useGetDevices();

  useEffect(() => {
    setDevices(data?.devices);
  }, [data]);

  return (
    <StyledDevices>
      {isLoading === true ? (
        'Getting Devices'
      ) : error ? (
        `Could not fetch devices`
      ) : devices ? (
        <Rotator devices={devices} />
      ) : (
        `Unexpected response from server`
      )}
    </StyledDevices>
  );
};

export default Devices;
