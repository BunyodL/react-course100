import { connect } from 'react-redux';
import { RootState } from "redux/redux-store";
import { DialogType, MessageType } from "types/types";
import Dialogs from './Dialogs.tsx';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

export type DialogsPropsType = {
  dialogsData: Array<DialogType>
  messagesData: Array<MessageType>
  isAuth: boolean
}

const mapStateToProps = (state: RootState): DialogsPropsType => ({
  dialogsData: state.dialogsPage.dialogsData,
  messagesData: state.dialogsPage.messagesData,
  isAuth: state.auth.isAuth
});

export default compose<any>(connect(mapStateToProps), withAuthRedirect)(Dialogs);
