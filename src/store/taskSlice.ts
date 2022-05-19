import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { tasksMock } from '../mocks/tasks';
import { Task, TaskQuadrants } from './typings';

type MoveTaskPayload = {
  taskId: string;
  destination?: TaskQuadrants;
};

const initialState: Array<Task> = tasksMock;

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    deleteTask: (state, action: PayloadAction<string>) => {
      return state.filter((task) => task.id !== action.payload);
    },
    moveTask: (state, action: PayloadAction<MoveTaskPayload>) => {
      const { taskId, destination } = action.payload;
      const task = state.find((task) => task.id === taskId);
      if (task && destination) task.type = destination;
    },
  },
  // add: (state) => {},
});

export const { moveTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
