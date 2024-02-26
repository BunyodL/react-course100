import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import MainApp from './App.tsx';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
