import { render } from './config/StoreProvider';
import { screen } from '@testing-library/react';
import { quadrantNames } from '../store/typings';
import { sampleTask } from './mocks/sampleTask';
import TaskCard from '../components/EisenhowerMatrix/components/TaskCard/TaskCard';

test('task title, comment, and labels should be rendered on the screen', () => {
  render(<TaskCard task={sampleTask} quadrantName={quadrantNames[0]} />);

  expect(screen.getByText('Walk on the Moon')).toBeVisible();
  expect(screen.getByText('Cause why not? :)')).toBeVisible();
  expect(screen.getByText('important')).toBeVisible();
});

test('when the task is in Important & Urgent quadrant the deadline should be displayed', () => {
  sampleTask.deadline = '2022-02-02';
  render(<TaskCard task={sampleTask} quadrantName={quadrantNames[0]} />);
  expect(screen.getByText(sampleTask.deadline)).toBeVisible();
});

test('when the task is in Important but not urgent quadrant the deadline should not be displayed', () => {
  sampleTask.deadline = '2022-02-02';
  render(<TaskCard task={sampleTask} quadrantName={quadrantNames[1]} />);
  expect(screen.queryByText(sampleTask.deadline)).toBeNull();
});
