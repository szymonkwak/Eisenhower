import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskGroups } from './typings';

export type TasksState = Array<Task>;

const initialState: TasksState = [
  {
    id: '112',
    type: 'NotUrgentImportant',
    title: 'Task no1',
  },
  {
    id: '1223',
    type: 'UrgentImportant',
    title: 'Task no2',
  },
];

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state) => {},
    delete: (state) => {},
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { add } = taskSlice.actions;

export default taskSlice.reducer;
