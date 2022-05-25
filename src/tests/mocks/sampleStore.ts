import { TaskQuadrant, quadrantNames } from '../../store/typings';
import { sampleTask } from './sampleTask';

export const storeMock: Array<TaskQuadrant> = [
  {
    name: quadrantNames[0],
    tasks: [sampleTask],
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

export const emptyStore: Array<TaskQuadrant> = [
  {
    name: quadrantNames[0],
    tasks: [],
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
