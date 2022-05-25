import reducer, { moveTask, addNewTask, deleteTask } from '../store/taskSlice';
import { quadrantNames, TaskQuadrant } from '../store/typings';
import { emptyStore, storeMock } from './mocks/sampleStore';

describe('reducer', () => {
  let store: TaskQuadrant[];
  beforeEach(() => {
    store = JSON.parse(JSON.stringify(storeMock));
  });
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });

  it('after dipatching moveTask action, the task should change quadrant', () => {
    const source = { droppableId: quadrantNames[0], index: 0 };
    const destination = { droppableId: quadrantNames[1], index: 0 };

    expect(store[0].tasks).not.toEqual([]);
    const updatedStore = reducer(store, moveTask({ source, destination }));
    expect(updatedStore[1].tasks).not.toEqual([]);
  });

  it('should return store with added task', () => {
    const quadrantToPush = 1;
    const newTask = {
      type: quadrantNames[quadrantToPush],
      task: { title: 'sample task', comment: 'sample comment', deadline: '2022-02-02' },
      labelsString: 'sample, sample2',
    };
    const expectedTask = {
      id: Date.now().toString(),
      title: 'sample task',
      comment: 'sample comment',
      deadline: '2022-02-02',
      done: false,
      inFilter: false,
      labels: ['sample', 'sample2'],
    };

    const updatedStore = reducer(store, addNewTask(newTask));
    expect(updatedStore[quadrantToPush].tasks).toContainEqual(expectedTask);
  });

  it('should return empty store after deleting last task', () => {
    expect(reducer(store, deleteTask('sample-id'))).toEqual(emptyStore);
  });
});
