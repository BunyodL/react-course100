import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

const App = props => {
  let state = props.store.getState();

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar friends={state.sidebar.friends} />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/" element='Hello' />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs" element={<Dialogs store={props.store} />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
