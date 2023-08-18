import { getUserAuthData } from './auth-reducer';

const SUCCESS_INITIALIZATION = 'samurai/app/SUCCESS_INITIALIZATION';

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_INITIALIZATION: {
      return { ...state, initialized: true };
    }
    default:
      return state;
  }
};

//Action creators
const successInitialization = () => ({ type: SUCCESS_INITIALIZATION });

//Thunk creators
export const initializeApp = () => dispatch => {
  let promise = dispatch(getUserAuthData());
  Promise.all([promise]).then(
    dispatch(successInitialization())
  );
};

export default appReducer;
