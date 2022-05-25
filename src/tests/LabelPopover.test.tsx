import { render } from './config/StoreProvider';
import { screen, fireEvent } from '@testing-library/react';
import { sampleTask } from './mocks/sampleTask';
import LabelPopoverButton from '../components/EisenhowerMatrix/components/TaskCard/LabelPopoverButton/LabelPopoverButton';

test('dialog with input and button should be rendered after clicking add label button', () => {
  render(<LabelPopoverButton task={sampleTask} />);
  fireEvent.click(screen.getByRole('button'));
  expect(screen.getByRole('presentation')).toBeVisible();
  expect(screen.getByPlaceholderText('labels separated by comma')).toBeVisible();
  expect(screen.getByRole('button')).not.toBeDisabled();
});
