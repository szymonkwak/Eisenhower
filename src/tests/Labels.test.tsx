import { render } from './config/StoreProvider';
import { screen } from '@testing-library/react';
import { sampleTask } from './mocks/sampleTask';
import Labels from '../components/EisenhowerMatrix/components/TaskCard/Labels/Labels';

test('after adding label it should be rendered on the screen', () => {
  sampleTask.labels.push('TestLab');
  render(<Labels task={sampleTask} />);
  expect(screen.getByText('TestLab')).toBeVisible();
});
