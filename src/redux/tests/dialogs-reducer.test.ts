import { dialogsReducer, actions } from '../reducers/dialogs-reducer';

let state = {
  dialogsData: [
    {
      id: 1,
      name: 'Alisher',
      age: 35,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGDHJH60ab8NWKbOSWJ45LpBX_xqVD0efAuQ&usqp=CAU',
    },
  ],
  messagesData: [
    { id: 1, message: "What's up" },
    { id: 2, message: "How's it going" },
    { id: 3, message: 'Welcome to the team' },
  ],
};

test('dialogs messages should be incremented', () => {
  let action = actions.addMessage('Good ebening');
  let newState = dialogsReducer(state, action);
  expect(newState.messagesData.length).toBe(4);
});
