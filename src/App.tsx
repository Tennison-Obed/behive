import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from './theme/ThemeProvider';
import { store } from './store';

import Home from './pages/Home/Home';
import "./App.css"
import Layout from './layouts/LayoutWrapper';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Layout >
          <Home />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
