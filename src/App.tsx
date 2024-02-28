import React from 'react';
import './App.css';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Preloader from './components/common/Preloader/Preloader.tsx';
import HeaderContainer from './components/Header/HeaderContainer.tsx';
import LoginContainer from './components/Login/LoginContainer.tsx';
import Music from './components/Music/Music.tsx';
import NavbarContainer from './components/Navbar/NavbarContainer.tsx';
import News from './components/News/News.tsx';
import Settings from './components/Settings/Settings.tsx';
import UsersContainer from './components/Users/UsersContainer.tsx';
import { initializeApp } from './redux/reducers/app-reducer.ts';
import store, { RootState } from './redux/redux-store.ts';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer.tsx'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer.tsx'))

type MapStateToProps = {
  initialized: boolean
}

type MapDispatchToProps = {
  initializeApp: () => void
}

type Props = MapStateToProps & MapDispatchToProps

class App extends React.Component<Props, {}> {
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

const mapStateToProps = (state: RootState): MapStateToProps => ({
  initialized: state.app.initialized,
});

const AppContainer = connect<MapStateToProps, MapDispatchToProps, {}, RootState>(mapStateToProps, { initializeApp })(App);

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
