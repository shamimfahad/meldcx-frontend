import { useState } from 'react';
import { notifyCompletion } from '../../helpers/notifyHelper';

import { Button } from '../utils/utllComponents.styles';
import { StyledFooter } from './footer.styles';

const Footer = ({ setToken, ...props }) => {
  const [notifying, setNotifying] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const setNotifyingCallBackFn = (val) => {
    setNotifying(val);
  };

  const handleLogout = () => {
    setLoggingOut(true);
    localStorage.removeItem('token');
    setToken(null);
    setLoggingOut(false);
  };

  const handleNotify = () => {
    setNotifying(true);
    notifyCompletion(setNotifyingCallBackFn);
  };

  return (
    <StyledFooter gap={`1rem`}>
      <Button onClick={handleNotify}>
        {notifying ? 'Notifying' : 'Notify'}
      </Button>
      <Button onClick={handleLogout}>
        {loggingOut ? 'Loggin' : 'Log'} Out
      </Button>
    </StyledFooter>
  );
};

export default Footer;
