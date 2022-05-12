import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import Rotator from '../../components/rotator/rotator.component';

import { StyledDevices } from './devices.styles';

const Devices = () => {
  const [devices, setDevices] = useState(undefined);

  const { data, error, isLoading } = useQuery(
    'todos',
    async () => {
      const res = await axios.get('http://35.201.2.209:8000/devices');
      return res.data;
    },
    {
      // Refetch the data every 5 second
      refetchInterval: 5000,
    }
  );

  useEffect(() => {
    setDevices(data?.devices);
  }, [data]);

  return (
    <StyledDevices>
      {isLoading === true ? (
        'Getting Devices'
      ) : error ? (
        `${error}`
      ) : data.devices ? (
        <div>
          <Rotator devices={devices} />
        </div>
      ) : (
        `Unexpected response from server`
      )}
    </StyledDevices>
  );
};

export default Devices;
