import { profileReducer, actions } from '../reducers/profile-reducer';

let state = {
  postsData: [
    { id: 1, message: 'Good morning, Vasya', likesCount: 12 },
    { id: 2, message: 'How are you', likesCount: 16 },
  ],
  profile: null,
  status: '',
  errorMessage: '',
};

test('post should be added', () => {
  let action = actions.addPost('my new text');
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(3);
});

test('last post message should be correct', () => {
  let action = actions.addPost('my new text');
  let newState = profileReducer(state, action);
  expect(newState.postsData[2].message).toBe('my new text');
});

test(`posts' length should be decremented`, () => {
  let action = actions.deletePost(2);
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(1);
});

test(`posts' length shouldn't be decremented if id incorrect`, () => {
  let action = actions.deletePost(100);
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(2);
});
