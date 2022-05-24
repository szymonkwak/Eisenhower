import { screen } from '@testing-library/react';
import { render } from './config/StoreProvider';
import Header from '../components/Header/Header';

test('header should have button to add new task', () => {
  render(<Header />);
  expect(screen.getByRole('button')).not.toBeDisabled();
  expect(screen.getByRole('button')).toHaveTextContent('Add new task');
});

test('header should have input for filtering tasks', () => {
  render(<Header />);
  expect(screen.getByRole('textbox')).toBeVisible();
  expect(screen.getByRole('textbox')).toHaveValue('');
});
