import { InferActionsTypes, ThunkActionType } from 'redux/redux-store';
import { getUserAuthData } from './auth-reducer.ts';

let initialState = {
  initialized: false,
};

type InitialStateType = typeof initialState;

const appReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case 'SUCCESS_INITIALIZATION': {
      return { ...state, initialized: true };
    }
    default:
      return state;
  }
};

type ActionTypes = InferActionsTypes<typeof actions>;

//Action creators
export const actions = {
  successInitialization: () =>
    ({
      type: 'SUCCESS_INITIALIZATION',
    } as const),
};

//Thunk creators
export const initializeApp =
  (): ThunkActionType<ActionTypes> => async (dispatch) => {
    let promise = await dispatch(getUserAuthData());
    Promise.all([promise]).then(() =>
      dispatch(actions.successInitialization())
    );
  };

export default appReducer;
