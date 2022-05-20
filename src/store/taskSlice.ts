import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskQuadrants } from './typings';
import { v4 as uuidv4 } from 'uuid';
import { tasksMock } from '../mocks/tasks';

type MoveTaskPayload = {
  taskId: string;
  destination?: TaskQuadrants;
};
type AddNewTask = Omit<Task, 'id' | 'done'>;

const initialState: Array<Task> = tasksMock;

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    moveTask: (state, action: PayloadAction<MoveTaskPayload>) => {
      const { taskId, destination } = action.payload;
      const task = state.find((task) => task.id === taskId);
      if (task && destination) task.type = destination;
    },
    addNewTask: (state, action: PayloadAction<AddNewTask>) => {
      const { type, title, comment, deadline } = action.payload;
      state.push({ id: uuidv4(), type, title, comment, deadline, done: false });
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      return state.filter((task) => task.id !== action.payload);
    },
    changeDoneStatus: (state, action: PayloadAction<string>) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) task.done = !task?.done;
    },
  },
});

export const { moveTask, addNewTask, deleteTask, changeDoneStatus } = taskSlice.actions;

export default taskSlice.reducer;
