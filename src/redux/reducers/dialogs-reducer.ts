import { DialogType, MessageType } from '../../@types/types';

const ADD_MESSAGE = 'samurai/dialogs/ADD_MESSAGE';

type InitialStateType = {
  dialogsData: Array<DialogType>;
  messagesData: Array<MessageType>;
};

let initialState: InitialStateType = {
  dialogsData: [
    {
      id: 1,
      name: 'Alisher',
      age: 35,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGDHJH60ab8NWKbOSWJ45LpBX_xqVD0efAuQ&usqp=CAU',
    },
    {
      id: 2,
      name: 'Oyatullo',
      age: 14,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8IueS9PvOxTQ9_BVVKTMcxrrKQG8i30rmA&usqp=CAU',
    },
    {
      id: 3,
      name: 'Umed',
      age: 22,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoldbXNMFuRVNmn4m9E5K4wb1h1CDH8b9daw&usqp=CAU',
    },
    {
      id: 4,
      name: 'Mamur',
      age: 18,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUi79hizcXaO2mqWYuFL9RYh7c-UQgCGt8w&usqp=CAU',
    },
    {
      id: 5,
      name: 'Ahadjon',
      age: 61,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7kWMjrIlJvW1nJsNRXdfzqjJcZCff5ZQRw&usqp=CAU',
    },
    {
      id: 6,
      name: 'Nozimkhon',
      age: 27,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoldbXNMFuRVNmn4m9E5K4wb1h1CDH8b9daw&usqp=CAU',
    },
  ],
  messagesData: [
    { id: 1, message: "What's up" },
    { id: 2, message: "How's it going" },
    { id: 3, message: 'Welcome to the team' },
  ],
};

const dialogsReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        id: state.messagesData.length + 1,
        message: action.newMessageText,
      };
      return { ...state, messagesData: [...state.messagesData, newMessage] };
    }
    default:
      return state;
  }
};

type AddMessage = {
  type: typeof ADD_MESSAGE;
  newMessageText: string;
};

type ActionTypes = AddMessage;

export const addMessage = (newMessageText: string): AddMessage => ({
  type: ADD_MESSAGE,
  newMessageText,
});

export default dialogsReducer;
