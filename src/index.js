import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/es/integration/react';
// import { store, persistor } from './redux/store';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStylesProvider } from './styles/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from './styles/Theme';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  //   <PersistGate loading={null} persistor={persistor}>
  <BrowserRouter basename="/Wallet">
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {GlobalStylesProvider}
      <App />
    </ThemeProvider>
  </BrowserRouter>
  //   </PersistGate>
  // </Provider>
);
