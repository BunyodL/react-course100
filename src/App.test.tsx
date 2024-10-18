import { render } from '@testing-library/react';
import { AppContainer } from './App';
import { Provider } from 'react-redux';
import store from 'redux/redux-store';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
  );
});
