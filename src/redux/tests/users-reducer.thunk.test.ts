import { usersAPI } from 'api/users-api';
import { ResponseType, ResultCodesEnum } from '../../api/types';
import { actions, follow, unfollow } from 'redux/reducers/users-reducer';

jest.mock('api/users-api');
const usersApiMock = usersAPI as jest.Mocked<typeof usersAPI>;

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
  dispatchMock.mockClear();
  getStateMock.mockClear();
  usersApiMock.follow.mockClear();
  usersApiMock.unfollow.mockClear();
});

const response: ResponseType<{}> = {
  data: {},
  messages: [],
  resultCode: ResultCodesEnum.Success,
};

// есть проблемы с resultCode
usersApiMock.follow.mockResolvedValue(Promise.resolve(response));
usersApiMock.unfollow.mockResolvedValue(Promise.resolve(response));

test('success follow thunk-creator', async () => {
  const thunk = follow(1);
  await thunk(dispatchMock, getStateMock, null);

  expect(usersApiMock.follow).toHaveBeenCalledWith(1); // проверка, что API был вызван правильно
  console.log(usersApiMock.follow.mock.results[0].value);

  expect(dispatchMock).toHaveBeenCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(
    1,
    actions.buttonIsDisabled(true, 1),
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1));
  expect(dispatchMock).toHaveBeenNthCalledWith(
    3,
    actions.buttonIsDisabled(false, 1),
  );
});

test('success unfollow thunk-creator', async () => {
  const thunk = unfollow(1);
  await thunk(dispatchMock, getStateMock, null);

  expect(usersApiMock.follow).toHaveBeenCalledWith(1); // проверка, что API был вызван правильно
  console.log(usersApiMock.follow.mock.results[0].value);

  expect(dispatchMock).toHaveBeenCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(
    1,
    actions.buttonIsDisabled(true, 1),
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1));
  expect(dispatchMock).toHaveBeenNthCalledWith(
    3,
    actions.buttonIsDisabled(false, 1),
  );
});
