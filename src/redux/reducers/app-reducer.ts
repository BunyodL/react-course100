import { InferActionsTypes, ThunkActionType } from '@/redux/redux-store';
import { getUserAuthData } from './auth-reducer.ts';

const initialState = {
  initialized: false,
};

export const appReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case 'app/SUCCESS_INITIALIZATION': {
      return { ...state, initialized: true };
    }
    default:
      return state;
  }
};

//Action creators
export const actions = {
  successInitialization: () =>
    ({
      type: 'app/SUCCESS_INITIALIZATION',
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

type InitialStateType = typeof initialState;
type ActionTypes = InferActionsTypes<typeof actions>;
