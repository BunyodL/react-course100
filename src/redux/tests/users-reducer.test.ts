import {
  InitialStateType,
  usersReducer,
  actions,
} from 'redux/reducers/users-reducer';

let state: InitialStateType;

beforeEach(() => {
  state = {
    users: [
      {
        id: 0,
        followed: false,
        name: 'Bunyod 0',
        photos: {
          large: null,
          small: null,
        },
        status: 'No status',
      },
      {
        id: 1,
        followed: false,
        name: 'Bunyod 1',
        photos: {
          large: null,
          small: null,
        },
        status: 'No status',
      },
      {
        id: 2,
        followed: true,
        name: 'Bunyod 2',
        photos: {
          large: null,
          small: null,
        },
        status: 'No status',
      },
      {
        id: 3,
        followed: true,
        name: 'Bunyod 3',
        photos: {
          large: null,
          small: null,
        },
        status: 'No status',
      },
    ],
    pageSize: 12,
    totalUsersCount: 0,
    currentPage: 1,
    portionSize: 15,
    isFetching: false,
    disabledButton: [],
  };
});

test('success follow user', () => {
  let action = actions.followSuccess(1);
  let newState = usersReducer(state, action);
  expect(newState.users[0]?.followed).toBeFalsy();
  expect(newState.users[1]?.followed).toBeTruthy();
});

test('success unfollow user', () => {
  let action = actions.unfollowSuccess(3);
  let newState = usersReducer(state, action);
  expect(newState.users[2]?.followed).toBeTruthy();
  expect(newState.users[3]?.followed).toBeFalsy();
});
