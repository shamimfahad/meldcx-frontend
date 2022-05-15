import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Login from './login.component';

describe('Login', () => {
  test('login button is disbaled if email or password field is empty', async () => {
    const setToken = jest.fn();

    render(<Login setToken={setToken} />);

    expect(
      await screen.findByRole('button', { name: /login/i })
    ).toBeDisabled();
  });

  test('login button is enabled after email and password are given', async () => {
    const setToken = jest.fn();

    render(<Login setToken={setToken} />);

    userEvent.type(screen.getByPlaceholderText(/email/i), 'abc@gmail.com');
    userEvent.type(screen.getByPlaceholderText(/password/i), 'meld123');

    expect(await screen.findByRole('button', { name: /login/i })).toBeEnabled();
  });

  test('showing error message if wrong password is given', async () => {
    const setToken = jest.fn();

    render(<Login setToken={setToken} />);

    userEvent.type(screen.getByPlaceholderText(/email/i), 'abc@gmail.com');
    userEvent.type(screen.getByPlaceholderText(/password/i), 'meld12345');

    userEvent.click(
      screen.getByRole('button', {
        name: /login/i,
      })
    );
    expect(
      await screen.findByText(/invalid email and password combination/i)
    ).toBeInTheDocument();
  });

  test('setToken to be called after successfully submitting the form', async () => {
    const setToken = jest.fn();

    render(<Login setToken={setToken} />);

    userEvent.type(screen.getByPlaceholderText(/email/i), 'abc@gmail.com');
    userEvent.type(screen.getByPlaceholderText(/password/i), 'meld123');

    userEvent.click(
      screen.getByRole('button', {
        name: /login/i,
      })
    );

    await waitFor(() => {
      expect(setToken).toHaveBeenCalled();
    });
  });
});
