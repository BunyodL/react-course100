import { addMessage, updateNewMessageText } from '../../../../redux/dialogs-reducer';
import AddMessage from './AddMessage';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  newMessageText: state.dialogsPage.newMessageText,
});

export default connect(mapStateToProps, { addMessage, updateNewMessageText })(AddMessage);
