import { ProfileStatusPropsType } from './ProfileStatusWithHooks';
import React, { ChangeEvent } from 'react';
import st from './ProfileInfo.module.css';

type State = {
    editMode: boolean;
    status: string;
};

class ProfileStatus extends React.Component<ProfileStatusPropsType, State> {
    state = {
        editMode: false,
        status: this.props.status,
    };

    activateEditMode = (): void => {
        this.setState({
            editMode: true,
        });
    };

    deactivateEditMode = (): void => {
        this.setState({
            editMode: false,
        });
        this.props.updateUserStatus(this.state.status);
    };

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value,
        });
    };

    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: State) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    }

    render() {
        return (
            <div className={st.profileStatus}>
                {!this.state.editMode && (
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status || '-----'}
                        </span>
                    </div>
                )}
                {this.state.editMode && (
                    <div>
                        <input
                            autoFocus
                            onChange={this.onStatusChange}
                            onBlur={this.deactivateEditMode}
                            type="text"
                            value={this.state.status}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default ProfileStatus;
