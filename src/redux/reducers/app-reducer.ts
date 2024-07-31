import { ThunkActionType } from 'redux/redux-store';
import { getUserAuthData } from './auth-reducer.ts';

const SUCCESS_INITIALIZATION = 'samurai/app/SUCCESS_INITIALIZATION';

let initialState = {
  initialized: false,
};

type InitialStateType = typeof initialState;

const appReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case SUCCESS_INITIALIZATION: {
      return { ...state, initialized: true };
    }
    default:
      return state;
  }
};

//Action creators
type SuccessInitialization = {
  type: typeof SUCCESS_INITIALIZATION;
};
const successInitialization = (): SuccessInitialization => ({
  type: SUCCESS_INITIALIZATION,
});

type ActionTypes = SuccessInitialization;

//Thunk creators
export const initializeApp =
  (): ThunkActionType<ActionTypes> => async (dispatch) => {
    let promise = await dispatch(getUserAuthData());
    Promise.all([promise]).then(() => dispatch(successInitialization()));
  };

export default appReducer;
