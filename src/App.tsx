import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import { Provider } from 'react-redux';
import { store } from './store/store';
import EisenhowerMatrix from './components/EisenhowerMatrix/EisenhowerMatrix';
import Header from './components/Header/Header';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Header />
          <EisenhowerMatrix />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
