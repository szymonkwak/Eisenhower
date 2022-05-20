import { TaskQuadrant, quadrantNames } from '../store/typings';

export const tasksMock: Array<TaskQuadrant> = [
  {
    name: quadrantNames[0],
    tasks: [
      {
        id: '0',
        title: 'Walk on the Moon',
        deadline: '2022-05-30',
        done: true,
        comment: 'Cause why not? :)',
      },
      {
        id: '1',
        title: 'Jump on bungee',
        done: false,
        deadline: '2022-07-19',
        comment: 'gooo on!',
      },
      {
        id: '2',
        title: 'A moment for nap',
        done: false,
        deadline: '2022-09-11',
        comment: 'after work is done',
      },
    ],
  },
  {
    name: quadrantNames[1],
    tasks: [],
  },
  {
    name: quadrantNames[2],
    tasks: [],
  },
  {
    name: quadrantNames[3],
    tasks: [],
  },
];
