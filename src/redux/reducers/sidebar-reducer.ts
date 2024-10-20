import { FriendType } from '../../@types/types';

const initialState = {
  friends: [
    {
      id: 1,
      name: 'Mamur',
      age: 18,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUi79hizcXaO2mqWYuFL9RYh7c-UQgCGt8w&usqp=CAU',
    },
    {
      id: 2,
      name: 'Ahadjon',
      age: 61,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7kWMjrIlJvW1nJsNRXdfzqjJcZCff5ZQRw&usqp=CAU',
    },
    {
      id: 3,
      name: 'Nozimkhon',
      age: 27,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoldbXNMFuRVNmn4m9E5K4wb1h1CDH8b9daw&usqp=CAU',
    },
  ] as Array<FriendType>,
};

export const sidebarReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  return state;
};

type InitialStateType = typeof initialState;
