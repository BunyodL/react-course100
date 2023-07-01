import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = props => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().profilePage;

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChange = text => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        return <MyPosts post={state.postData} updateNewPostText={onPostChange} addPost={addPost} newPostText={state.newPostText} />;
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
