import { Task } from '../store/typings';

export const tasksMock: Array<Task> = [
  {
    id: '1',
    type: 'NotUrgentImportant',
    title: 'Task no1',
    done: true,
  },
  {
    id: '2',
    type: 'UrgentImportant',
    title: 'Task no2',
    done: false,
  },
  {
    id: '3',
    type: 'UrgentImportant',
    title: 'Task no3',
    done: false,
  },
];
