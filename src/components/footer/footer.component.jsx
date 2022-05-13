import { Button } from '../utils/utllComponents.styles';
import { StyledFooter } from './footer.styles';

const Footer = ({ setToken, ...props }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <StyledFooter gap={`1rem`}>
      <Button>Notify</Button>
      <Button onClick={handleLogout}>Log Out</Button>
    </StyledFooter>
  );
};

export default Footer;
