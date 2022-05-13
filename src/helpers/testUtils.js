import { render } from '@testing-library/react';
import { rest } from 'msw';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export const handlers = [
  rest.get('*/devices', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        devices: [
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
        ],
      })
    );
  }),
  rest.post('*/login', (req, res, ctx) => {
    try {
      if (req.body.password !== 'meld123') {
        return res(
          ctx.status(401),
          ctx.json('Invalid email and password combination')
        );
      }
      return res(ctx.status(200), ctx.json(`token`));
    } catch (e) {
      console.log(e);
    }
  }),
];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

export function renderWithClient(ui) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>
      ),
  };
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return ({ children }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
}
