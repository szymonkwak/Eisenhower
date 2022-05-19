import { Task } from '../store/typings';

export const tasksMock: Array<Task> = [
  {
    id: '1',
    type: 'UrgentImportant',
    title: 'Walk on the Moon',
    deadline: "2022-05-30",
    done: true,
    comment: 'Cause why not? :)',
  },
  {
    id: '2',
    type: 'UrgentNotImportant',
    title: 'Jump on bungee',
    done: false,
    deadline: "2022-07-19",
    comment: 'gooo on!',
  },
  {
    id: '3',
    type: 'UrgentNotImportant',
    title: 'A moment for nap',
    done: false,
    deadline: "2022-09-11",
    comment: 'after work is done',
  },
];
