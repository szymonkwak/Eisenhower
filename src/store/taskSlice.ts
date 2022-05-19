import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { tasksMock } from '../mocks/tasks';
import { Task, TaskQuadrants } from './typings';

const initialState: Array<Task> = tasksMock;

type MoveTaskPayload = {
  taskId: string;
  destination?: TaskQuadrants;
};
export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    moveTask: (state, action: PayloadAction<MoveTaskPayload>) => {
      const { taskId, destination } = action.payload;
      const task = state.find((task) => task.id === taskId);
      if (task && destination) task.type = destination;
    },
    add: (state) => {},
    delete: (state) => {},
  },
});

export const { moveTask } = taskSlice.actions;

export default taskSlice.reducer;
