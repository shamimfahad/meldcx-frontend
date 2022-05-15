import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Footer from './footer.component';

describe('footer', () => {
  test('setToken is called upon logout button click', () => {
    const setToken = jest.fn();
    render(<Footer setToken={setToken} />);

    const logoutButton = screen.getByRole('button', { name: /log out/i });
    userEvent.click(logoutButton);

    expect(setToken).toHaveBeenCalled();
  });
});
