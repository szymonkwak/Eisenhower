import { Task, taskQuadrants } from '../store/typings';

export const tasksMock: Array<Task> = [
  {
    id: '0',
    type: taskQuadrants[0],
    title: 'Walk on the Moon',
    deadline: "2022-05-30",
    done: true,
    comment: 'Cause why not? :)',
  },
  {
    id: '1',
    type: taskQuadrants[1],
    title: 'Jump on bungee',
    done: false,
    deadline: "2022-07-19",
    comment: 'gooo on!',
  },
  {
    id: '2',
    type: taskQuadrants[1],
    title: 'A moment for nap',
    done: false,
    deadline: "2022-09-11",
    comment: 'after work is done',
  },
];
