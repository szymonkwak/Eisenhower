import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { DraggableLocation } from '@react-forked/dnd';
import { QuadrantNames, Task, TaskQuadrant } from './typings';
import { tasksMock } from '../mocks/tasks';

type MoveTaskPayload = {
  taskId: string;
  destination: DraggableLocation | null;
  source: DraggableLocation | null;
};

type AddNewTask = {
  type: QuadrantNames;
  task: Omit<Task, 'id' | 'done' | 'label'>;
};

type AddLabel = {
  taskId: string;
  labels: string;
};

type DeleteLabel = {
  taskId: string;
  labelIndex: number;
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
      const { taskId, source, destination } = action.payload;
      if (!destination) return;
      if (!source) return;

      let taskToMove: any;

      state.map(({ name, tasks }) => {
        if (name === source.droppableId) taskToMove = tasks.splice(source.index, 1);
      });

      state.map(({ name, tasks }) => {
        if (name === destination.droppableId) tasks.splice(destination.index, 0, taskToMove[0]);
      });
    },

    addNewTask: (state, action: PayloadAction<AddNewTask>) => {
      const {
        type,
        task: { title, comment, deadline },
      } = action.payload;
      const quadrant = state.find((q) => q.name === type);
      quadrant?.tasks.push({ id: uuidv4(), title, comment, deadline, done: false, labels: [] });
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

    addlabels: (state, action: PayloadAction<AddLabel>) => {
      const { taskId, labels: label } = action.payload;
      return state.map(({ name, tasks }) => {
        const updatedTasks = tasks.map((task) => {
          if (task.id === taskId) task = { ...task, labels: label.split(',') };
          return task;
        });
        return { name, tasks: updatedTasks };
      });
    },

    deleteLabel: (state, action: PayloadAction<DeleteLabel>) => {
      const { taskId, labelIndex } = action.payload;
      state.map(({ name, tasks }) => {
        const updatedTasks = tasks.map((task) => {
          if (task.id === taskId) task = { ...task, labels: task.labels.splice(labelIndex, 1) };
          return task;
        });
      });
    },
  },
});

export const { moveTask, addNewTask, deleteTask, changeDoneStatus, addlabels, deleteLabel } = taskSlice.actions;

export default taskSlice.reducer;
