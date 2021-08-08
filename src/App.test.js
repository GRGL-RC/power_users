import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const powerUserstext = screen.getByText(/Power users/i);
  expect(powerUserstext).toBeInTheDocument();
});