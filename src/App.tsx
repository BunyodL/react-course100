import React, {FC} from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News.tsx';
import Music from './components/Music/Music.tsx';
import Settings from './components/Settings/Settings.tsx';
import UsersContainer from './components/Users/UsersContainer.tsx';
import NavbarContainer from './components/Navbar/NavbarContainer.tsx';
import HeaderContainer from './components/Header/HeaderContainer.tsx';
import LoginContainer from './components/Login/LoginContainer.tsx';
import { Provider, connect } from 'react-redux';
import { initializeApp } from './redux/reducers/app-reducer.ts';
import Preloader from './components/common/Preloader/Preloader.tsx';
import store, { RootState } from './redux/redux-store.ts';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer.ts'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer.tsx'))

type AppComponentPropsType = {
  initializeApp: () => void
  initialized: boolean
}

class App extends React.Component<AppComponentPropsType, {}> {
  handleUncaughtErrors(e: PromiseRejectionEvent) {
    console.log("Error occurred: " + e.reason);
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.handleUncaughtErrors);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.handleUncaughtErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <React.Suspense fallback={<Preloader />}>
            <Routes>
              <Route path='/' element='Hello' />
              <Route path='/profile' element={<ProfileContainer />}>
                <Route path=':userId' element={<ProfileContainer />} />
              </Route>
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/users/*' element={<UsersContainer />} />
              <Route path='/news/*' element={<News />} />
              <Route path='/music/*' element={<Music />} />
              <Route path='/settings/*' element={<Settings />} />
              <Route path='/login/' element={<LoginContainer />} />
              <Route path='*' element={<div>404 NOT FOUND</div>} />
            </Routes>
          </React.Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  initialized: state.app.initialized,
});

const AppContainer: FC = connect(mapStateToProps, { initializeApp })(App);

const MainApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default MainApp;
