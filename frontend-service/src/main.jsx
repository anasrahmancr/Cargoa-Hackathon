import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; 
import store from './redux/store'; 
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');

const app = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

ReactDOM.createRoot(rootElement).render(app);