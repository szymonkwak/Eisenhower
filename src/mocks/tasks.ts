import { Task } from '../store/typings';

export const tasksMock: Array<Task> = [
  {
    id: '1',
    type: 'NotUrgentImportant',
    title: 'Task no1',
  },
  {
    id: '2',
    type: 'UrgentImportant',
    title: 'Task no2',
  },
  {
    id: '3',
    type: 'UrgentImportant',
    title: 'Task no3',
  },
];
