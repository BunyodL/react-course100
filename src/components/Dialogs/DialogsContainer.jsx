import { connect } from 'react-redux';
import Dialogs from './Dialogs';

const mapStateToProps = state => ({
  dialogsData: state.dialogsPage.dialogsData,
  messagesData: state.dialogsPage.messagesData,
});

export default connect(mapStateToProps)(Dialogs);
