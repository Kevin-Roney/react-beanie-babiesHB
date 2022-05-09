import { render, screen } from '@testing-library/react';
import BeaniesPage from './BeaniesPage';

test('renders learn react link', () => {
  render(<BeaniesPage />);
  const linkElement = screen.getByText(/Current Page~/i);
  expect(linkElement).toBeInTheDocument();
});
