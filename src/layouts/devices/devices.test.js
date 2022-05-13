import { screen } from '@testing-library/react';

import { renderWithClient } from '../../helpers/testUtils';
import Devices from './devices.component';
import { server } from '../../setupTests';
import { rest } from 'msw';

test('if the devices fetch succeed, show devices online', async () => {
  renderWithClient(<Devices />);

  expect(await screen.findByText(/devices online/i)).toBeInTheDocument();
});

test('if the devices fetch fails, show the error message', async () => {
  server.use(
    rest.get('*', (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  renderWithClient(<Devices />);

  expect(
    await screen.findByText(/Could not fetch devices/i)
  ).toBeInTheDocument();
});
