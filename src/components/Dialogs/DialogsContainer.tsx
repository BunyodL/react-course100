import { connect } from 'react-redux';
import { RootState } from "redux/redux-store";
import { DialogType, MessageType } from "types/types";
import Dialogs from './Dialogs.tsx';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

type MapStateToProps = {
  dialogsData: Array<DialogType>
  messagesData: Array<MessageType>
  isAuth: boolean
}

export type DialogsPropsType = MapStateToProps

const mapStateToProps = (state: RootState): MapStateToProps => ({
  dialogsData: state.dialogsPage.dialogsData,
  messagesData: state.dialogsPage.messagesData,
  isAuth: state.auth.isAuth
});

export default compose<any>(connect<MapStateToProps, {}, {}, RootState>(mapStateToProps), withAuthRedirect)(Dialogs);