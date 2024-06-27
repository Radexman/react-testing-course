import { render, screen } from '@testing-library/react';
import Users from './Users';
import { server } from '../../mocks/server';
import { http, HttpResponse } from 'msw';

describe('Users component should', () => {
  test('render correctly', () => {
    render(<Users />);
    const headingElement = screen.getByRole('heading', {
      level: 1,
      name: 'Users',
    });
    expect(headingElement).toBeInTheDocument();
  });

  // Testing regular fetch request
  test('render a list of users', async () => {
    render(<Users />);
    const users = await screen.findAllByRole('listitem');
    expect(users).toHaveLength(4);
  });

  // Handling error testing
  test('render error', async () => {
    server.use(
      http.get('https://jsonplaceholder.typicode.com/users', () => {
        return HttpResponse.error();
      })
    );

    render(<Users />);
    const errorElement = await screen.findByText('Failed fetching users');
    expect(errorElement).toBeInTheDocument();
  });
});
