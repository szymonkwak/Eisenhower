import { render, screen, fireEvent } from './config/StoreProvider';
import AddTaskDialog from '../components/AddTask/AddTaskDialog';

test('inputs for adding task should be visible after Add new task button click', () => {
  render(<AddTaskDialog />);
  fireEvent.click(screen.getByRole('button', { name: 'Add new task' }));

  expect(screen.getByText('Title')).toBeVisible();
  expect(screen.getByLabelText('Comment')).toBeVisible();
  expect(screen.getByLabelText('Labels')).toBeVisible();
  expect(screen.getByRole('button', { name: 'Save' })).not.toBeDisabled();
});
