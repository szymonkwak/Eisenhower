import { configureStore } from '@reduxjs/toolkit';
import { saveToLocalStorage } from './localStorageSupport';
import tasksReducer from './taskSlice';

export const store = configureStore({
  reducer: { tasks: tasksReducer },
});

store.subscribe(() => saveToLocalStorage(store.getState().tasks));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
