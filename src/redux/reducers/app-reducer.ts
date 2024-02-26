import { getUserAuthData } from './auth-reducer.ts';

const SUCCESS_INITIALIZATION = 'samurai/app/SUCCESS_INITIALIZATION';

let initialState = {
  initialized: false,
};

type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SUCCESS_INITIALIZATION: {
      return { ...state, initialized: true };
    }
    default:
      return state;
  }
};

//Action creators
type SuccessInitializationActionType = {
  type: typeof SUCCESS_INITIALIZATION
}
const successInitialization = (): SuccessInitializationActionType => ({ type: SUCCESS_INITIALIZATION });

//Thunk creators
export const initializeApp = () => async (dispatch: any) => {
  let promise = await dispatch(getUserAuthData());
  Promise.all([promise]).then(
    dispatch(successInitialization())
  );
};

export default appReducer;
