import { Button } from '../utils/utllComponents.styles';
import { StyledFooter } from './footer.styles';

const Footer = () => {
  return (
    <StyledFooter gap={`1rem`}>
      <Button>Notify</Button>
      <Button>Log Out</Button>
    </StyledFooter>
  );
};

export default Footer;
