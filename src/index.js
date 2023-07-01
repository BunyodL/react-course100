import './index.css';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = state => {

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App state={state} store={store}/>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
