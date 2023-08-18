import dialogsReducer, { addMessage } from '../reducers/dialogs-reducer';

let state = {
  messagesData: [
    { id: 1, message: "What's up" },
    { id: 2, message: "How's it going" },
    { id: 3, message: 'Welcome to the team' },
  ],
};

test('dialogs messages should be incremented', () => {
  let action = addMessage('Good ebening');
  let newState = dialogsReducer(state, action);
  expect(newState.messagesData.length).toBe(4);
});
