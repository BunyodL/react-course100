import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import dialogsReducer from './reducers/dialogs-reducer';
import profileReducer from './reducers/profile-reducer';
import sidebarReducer from './reducers/sidebar-reducer';
import usersReducer from './reducers/users-reducer';
import authReducer from './reducers/auth-reducer';
import ThunkMiddleware from 'redux-thunk';
import appReducer from './reducers/app-reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(ThunkMiddleware));

window.store = store;

export default store;
