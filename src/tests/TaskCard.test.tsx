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
