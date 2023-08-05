const SET_USER_DATA = 'SET_USER_DATA';
const RESPONSE_IS_FETCHING = 'RESPONSE_IS_FETCHING';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, ...action.data, isAuth: true };
    }
    case RESPONSE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

export const setUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } });
export const responseIsFetching = isFetching => ({ type: SET_USER_DATA, isFetching });

export default authReducer;
