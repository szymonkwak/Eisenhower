import { render, screen } from './config/StoreProvider';

import TaskCardActions from '../components/EisenhowerMatrix/components/TaskCard/TaskCardActions/TaskCardActions';
import { sampleTask } from './mocks/sampleTask';

test('when the task is done there should be checked checkbox', () => {
  sampleTask.done = true;
  render(<TaskCardActions task={sampleTask} />);

  expect(screen.getByTestId('CheckBoxOutlinedIcon')).toBeInTheDocument();
});

test('when the task is not done there should be unchecked checkbox', () => {
  sampleTask.done = false;
  render(<TaskCardActions task={sampleTask} />);

  sampleTask.done = false;
  expect(screen.getByTestId('CheckBoxOutlineBlankIcon')).toBeInTheDocument();
});
