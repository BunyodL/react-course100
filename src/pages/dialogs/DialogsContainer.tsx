import { ComponentType } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { RootState } from 'redux/redux-store';
import { DialogType, MessageType } from '@/@types/types.ts';
import { withAuthRedirect } from '@/hoc';
import { Dialogs } from '.';

type MapStateToProps = {
    dialogsData: Array<DialogType>;
    messagesData: Array<MessageType>;
};

export type DialogsPropsType = MapStateToProps;

const mapStateToProps = (state: RootState): MapStateToProps => ({
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
});

export default compose<ComponentType>(
    withAuthRedirect,
    connect<MapStateToProps, {}, {}, RootState>(mapStateToProps),
)(Dialogs);
