import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import { Provider } from 'react-redux';
import { store } from './store/store';
import EisenhowerMatrix from './components/EisenhowerMatrix/EisenhowerMatrix';
import AddTask from './components/AddTask/AddTask';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <h1>Eisenhower</h1>
          <AddTask />
          <EisenhowerMatrix />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
