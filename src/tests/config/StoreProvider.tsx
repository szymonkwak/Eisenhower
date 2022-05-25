import '@testing-library/jest-dom';
import { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import taskReducer from '../../store/taskSlice';
import { storeMock } from '../mocks/sampleStore';

const initialState = storeMock;

const WithProviders: FC = ({ children }) => {
  const store = configureStore({ reducer: taskReducer, preloadedState: initialState });
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: WithProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
