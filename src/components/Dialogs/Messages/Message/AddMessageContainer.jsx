import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../../redux/dialogs-reducer';
import AddMessage from './AddMessage';
import StoreContext from '../../../../StoreContext';

const AddMessageContainer = props => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        let onAddMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        let onMessageChange = text => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };
        return <AddMessage addMessage={onAddMessage} changeMessage={onMessageChange} newMessageText={state.newMessageText} />;
      }}
    </StoreContext.Consumer>
  );
};

export default AddMessageContainer;
