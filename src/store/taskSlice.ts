import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { QuadrantNames, Task, TaskQuadrant } from './typings';
import { tasksMock } from '../mocks/tasks';

type MoveTaskPayload = {
  taskId: string;
  destination?: QuadrantNames;
};
type AddNewTask = {
  type: QuadrantNames;
  task: Omit<Task, 'id' | 'done' | 'label'>;
};

// const initialState: Array<TaskQuadrant> = quadrantNames.map((name) => {
//   return { name, tasks: [] };
// });
const initialState: Array<TaskQuadrant> = tasksMock;

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
      const {
        type,
        task: { title, comment, deadline },
      } = action.payload;
      const quadrant = state.find((q) => q.name === type);
      quadrant?.tasks.push({ id: uuidv4(), title, comment, deadline, done: false, label: [] });
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      return state.map(({ name, tasks }) => {
        const filteredTasks = tasks.filter((task) => task.id !== action.payload);
        return { name, tasks: filteredTasks };
      });
    },

    changeDoneStatus: (state, action: PayloadAction<string>) => {
      return state.map(({ name, tasks }) => {
        const updatedTasks = tasks.map((task) => {
          if (task.id === action.payload) task = { ...task, done: !task.done };
          return task;
        });
        return { name, tasks: updatedTasks };
      });
    },
  },
});

export const { moveTask, addNewTask, deleteTask, changeDoneStatus } = taskSlice.actions;

export default taskSlice.reducer;
