import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  Action,
} from 'redux';
import dialogsReducer from './reducers/dialogs-reducer.ts';
import profileReducer from './reducers/profile-reducer.ts';
import sidebarReducer from './reducers/sidebar-reducer.ts';
import usersReducer from './reducers/users-reducer.ts';
import authReducer from './reducers/auth-reducer.ts';
import ThunkMiddleware, { ThunkAction } from 'redux-thunk';
import appReducer from './reducers/app-reducer.ts';

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

// window.store = store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// type ThunkActionType is for typing thunk action creators
export type ThunkActionType<T extends Action> = ThunkAction<
  Promise<void>,
  RootState,
  null,
  T
>;

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionsTypes<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesTypes<T>>;

let store = legacy_createStore(rootReducer, applyMiddleware(ThunkMiddleware));
export default store;
