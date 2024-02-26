import { addMessage } from '../../../../redux/reducers/dialogs-reducer.ts';
import AddMessage from './AddMessage';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  newMessageText: state.dialogsPage.newMessageText,
});

export default connect(mapStateToProps, { addMessage })(AddMessage);
