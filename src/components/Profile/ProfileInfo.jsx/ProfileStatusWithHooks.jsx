import React, { useEffect, useState } from 'react';
import st from './ProfileInfo.module.css';

const ProfileStatusWithHooks = props => {
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

  const onStatusChange = e => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={st.profileStatus}>
      {!editMode && (
        <div>
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
