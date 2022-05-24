import '@testing-library/jest-dom';

import { render, RenderOptions } from '@testing-library/react';
import { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const WithProviders: FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: WithProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
