import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from './theme/ThemeProvider';
import { store } from './store';
import Layout from './components/layout/Layout/Layout';
import Home from './pages/Home/Home';
// import { ThemeMode } from '../../types';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Layout>
          <Home />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
