import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  Action,
} from 'redux';
import ThunkMiddleware, { ThunkAction } from 'redux-thunk';
import {
  appReducer,
  authReducer,
  dialogsReducer,
  profileReducer,
  sidebarReducer,
  usersReducer,
} from './reducers';

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// type ThunkActionType is for typing thunk action creators
export type ThunkActionType<T extends Action> = ThunkAction<
  Promise<void>,
  RootState,
  null,
  T
>;

// this is for typing actions (action creators)
export type InferActionsTypes<T> = T extends {
  [key: string]: (...args: any[]) => infer U
}
  ? U
  : never;

const store = legacy_createStore(rootReducer, applyMiddleware(ThunkMiddleware));
export default store;

// @ts-ignore
window.store = store;
