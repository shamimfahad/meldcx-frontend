import { useState } from 'react';
import { QueryClient, QueryClientProvider, QueryCache } from 'react-query';

import Devices from './layouts/devices/devices.component';
import Login from './layouts/login/login.component';
import Footer from './components/footer/footer.component';

import './App.css';

const queryCache = new QueryCache();

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem('token') ? localStorage.getItem('token') : null
  );

  const queryClient = new QueryClient();

  return (
    <div className='App'>
      <QueryClientProvider client={queryClient} queryCache={queryCache}>
        {token ? (
          <>
            <Devices />
            <Footer setToken={setToken} />
          </>
        ) : (
          <Login setToken={setToken} />
        )}
      </QueryClientProvider>
    </div>
  );
};

export default App;
