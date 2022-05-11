import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider, QueryCache } from 'react-query';

import Devices from './layouts/devices/devices.component';
import Login from './layouts/login/login.component';

import './App.css';

const queryCache = new QueryCache();

const App = () => {
  const [token, setToken] = useState(null);
  const queryClient = new QueryClient();

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <div className='App'>
      <QueryClientProvider client={queryClient} queryCache={queryCache}>
        {token ? <Devices /> : <Login setToken={setToken} />}
      </QueryClientProvider>
    </div>
  );
};

export default App;
