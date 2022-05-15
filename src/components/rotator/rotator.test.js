import { screen } from '@testing-library/react';

import { renderWithClient } from '../../helpers/testUtils';

import Rotator from './rotator.component';

describe('Rotator', () => {
  const devices = [
    {
      id: 0,
      name: 'Mellicent',
    },
    {
      id: 1,
      name: 'Janka',
    },
    {
      id: 2,
      name: 'Ellyn',
    },
  ];

  test('it shows number devices online', async () => {
    renderWithClient(<Rotator devices={devices} />);

    expect(await screen.findByText(`${devices.length}`)).toBeInTheDocument();
  });

  test('it renders equal no of device element that are being passed in the props', async () => {
    renderWithClient(<Rotator devices={devices} />);
    const noOfDevices = screen.queryAllByTestId('device').length;

    expect(noOfDevices).toBe(devices.length);
  });
});
