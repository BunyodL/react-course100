import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import dialogsReducer from './reducers/dialogs-reducer.ts';
import profileReducer from './reducers/profile-reducer.ts';
import sidebarReducer from './reducers/sidebar-reducer.ts';
import usersReducer from './reducers/users-reducer.ts';
import authReducer from './reducers/auth-reducer.ts';
import ThunkMiddleware from 'redux-thunk';
import appReducer from './reducers/app-reducer.ts';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(ThunkMiddleware));

// window.store = store;

export type RootState = ReturnType<typeof store.getState>
export default store;
