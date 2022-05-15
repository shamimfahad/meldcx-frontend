import { screen } from '@testing-library/react';
import { rest } from 'msw';

import { renderWithClient } from '../../helpers/testUtils';
import { server } from '../../setupTests';

import Devices from './devices.component';

describe('Devices', () => {
  test('if the devices fetch succeed, rotator component is rendered', async () => {
    renderWithClient(<Devices />);

    expect(await screen.findByTestId('rotator-component')).toBeInTheDocument();
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
});
