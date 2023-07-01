import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../../redux/dialogs-reducer';
import AddMessage from './AddMessage';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    changeMessage: text => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage);

export default AddMessageContainer;
