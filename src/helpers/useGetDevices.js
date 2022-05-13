import axios from 'axios';
import { useQuery } from 'react-query';

const fetchDevices = async () => {
  const response = await axios.get('http://35.201.2.209:8000/devices');
  return response.data;
};

export default function useGetDevices() {
  return useQuery('devices', () => fetchDevices(), {
    // Refetch the data every 5 second
    refetchInterval: 5000,
  });
}
