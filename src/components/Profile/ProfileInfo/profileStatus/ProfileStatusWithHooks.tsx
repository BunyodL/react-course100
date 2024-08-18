import { ChangeEvent, FC, useEffect, useState } from 'react';
import st from '../ProfileInfo.module.css';

export type ProfileStatusPropsType = {
  status: string
  updateUserStatus: (status: string) => void
}

const ProfileStatusWithHooks: FC<ProfileStatusPropsType> = props => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={st.profileStatus}>
      {!editMode && (
        <div>
          <b>Status: </b>
          <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input type='text' autoFocus onChange={onStatusChange} onBlur={deactivateEditMode} value={status} />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
